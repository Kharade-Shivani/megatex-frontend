import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import httpClient from '../Api/axios'; 

function BannerMaster() {
  const [banners, setBanners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
    status: 'active'
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Fetch all banners
  const fetchBanners = async () => {
    try {
      setLoading(true);
      const response = await httpClient.get('/getAllBanner');
      setBanners(response.data);
    } catch (error) {
      console.error('Error fetching banners:', error);
      showErrorMessage('Error fetching banners');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Show success message
  const showSuccessMessage = (message) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  // Show error message
  const showErrorMessage = (message) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  // Handle file upload
  const handleFileUpload = async (file) => {
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('image', file);

      const response = await httpClient.post('/file_upload', uploadFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('File upload response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('File upload failed');
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!imageFile && !formData.image) {
      showErrorMessage('Please select an image');
      return;
    }

    try {
      setLoading(true);
      let imageUrl = formData.image;

      // If new file is selected, upload it
      if (imageFile) {
        console.log('Uploading new file...');
        const uploadResponse = await handleFileUpload(imageFile);
        console.log('Upload response:', uploadResponse);
        
        // FIXED: Extract image URL from the correct field based on your API response
        // Your API returns: { "path": "https://...", "status": true }
        imageUrl = uploadResponse.path;
        
        if (!imageUrl) {
          console.error('No image URL in response. Full response:', uploadResponse);
          throw new Error('Failed to get image URL from upload response. Please check the backend response structure.');
        }
        
        console.log('Final image URL:', imageUrl);
      }

      const bannerData = {
        image: imageUrl,
        status: formData.status,
      };

      console.log('Sending banner data:', bannerData);

      if (editingId) {
        // Update existing banner
        await httpClient.put('/update_Banner', { ...bannerData, _id: editingId });
        showSuccessMessage('Banner updated successfully!');
      } else {
        // Create new banner
        await httpClient.post('/create_banner', bannerData);
        showSuccessMessage('Banner created successfully!');
      }

      resetForm();
      fetchBanners();
    } catch (error) {
      console.error('Error saving banner:', error);
      showErrorMessage('Error saving banner: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (banner) => {
    setFormData({
      image: banner.image,
      status: banner.status
    });
    setImagePreview(banner.image);
    setEditingId(banner._id);
    setImageFile(null);
    setShowForm(true);
  };

  // Handle delete with better confirmation
  const handleDelete = async (id) => {
    // Create a custom confirmation modal instead of window.confirm
    const confirmed = await showDeleteConfirmation();
    if (confirmed) {
      try {
        await httpClient.delete(`/delete_Banner/${id}`);
        // Show success message instead of alert
        showSuccessMessage('Banner deleted successfully!');
        fetchBanners();
      } catch (error) {
        console.error('Error deleting banner:', error);
        showErrorMessage('Error deleting banner');
      }
    }
  };

  // Custom delete confirmation modal
  const showDeleteConfirmation = () => {
    return new Promise((resolve) => {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
      modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-sm w-full p-6">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <FiTrash2 class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Delete Banner</h3>
            <p class="text-gray-600 mb-6">Are you sure you want to delete this banner? This action cannot be undone.</p>
            <div class="flex gap-3">
              <button id="cancel-btn" class="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                Cancel
              </button>
              <button id="confirm-btn" class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);

      const cancelBtn = modal.querySelector('#cancel-btn');
      const confirmBtn = modal.querySelector('#confirm-btn');

      cancelBtn.onclick = () => {
        document.body.removeChild(modal);
        resolve(false);
      };

      confirmBtn.onclick = () => {
        document.body.removeChild(modal);
        resolve(true);
      };

      // Close on background click
      modal.onclick = (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
          resolve(false);
        }
      };
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      image: '',
      status: 'active'
    });
    setImagePreview('');
    setEditingId(null);
    setImageFile(null);
    setShowForm(false);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        showErrorMessage('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showErrorMessage('Image size should be less than 5MB');
        return;
      }

      setImageFile(file);
      // Create preview URL for display only
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Banner Management</h1>
            <p className="text-gray-600 mt-1">Manage your website banners and promotions</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FiPlus className="text-lg" />
            Add Banner
          </button>
        </div>

        {/* Banner Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? 'Edit Banner' : 'Add New Banner'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Banner Image
                  </label>
                  <div className="flex flex-col items-center space-y-4">
                    {(imagePreview || (editingId && formData.image)) && (
                      <div className="w-full max-w-xs">
                        <img
                          src={imagePreview || formData.image}
                          alt="Banner preview"
                          className="w-full h-32 object-cover rounded-lg border shadow-sm"
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
                      required={!editingId}
                    />
                    <p className="text-xs text-gray-500">
                      {editingId ? 'Select a new image to replace the current one' : 'Select an image to upload (Max 5MB)'}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Saving...' : (editingId ? 'Update' : 'Create')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Banners Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {loading && !showForm ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-50 to-amber-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      SR No
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Banner Image
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {banners.map((banner, index) => (
                    <tr key={banner._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={banner.image}
                            alt={`Banner ${index + 1}`}
                            className="h-16 w-32 object-cover rounded-lg border shadow-sm"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          banner.status === 'active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(banner)}
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
                          >
                            <FiEdit className="text-lg" />
                            <span className="text-sm hidden sm:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(banner._id)}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50"
                          >
                            <FiTrash2 className="text-lg" />
                            <span className="text-sm hidden sm:inline">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {banners.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <FiPlus className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium text-gray-600 mb-2">No banners found</p>
                  <p className="text-gray-500 mb-4">Get started by creating your first banner</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FiPlus className="text-lg" />
                    Add Your First Banner
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BannerMaster;