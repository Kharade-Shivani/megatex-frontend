import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX, FiImage } from 'react-icons/fi';
import httpClient from '../Api/axios'; 

function FIBCMaster() {
  const [fibcs, setFibcs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fibc_image: '',
    fibc_title: '',
    fibc_specification: '',
    status: 'active'
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Fetch all FIBCs
  const fetchFIBCs = async () => {
    try {
      setLoading(true);
      const response = await httpClient.get('/getAllFIBC');
      setFibcs(response.data);
    } catch (error) {
      console.error('Error fetching FIBCs:', error);
      showErrorMessage('Error fetching FIBCs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFIBCs();
  }, []);

  // Show success message
  const showSuccessMessage = (message) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-xs sm:max-w-sm';
    toast.innerHTML = `
      <div class="flex items-center gap-2 sm:gap-3">
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm sm:text-base">${message}</span>
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
    toast.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-xs sm:max-w-sm';
    toast.innerHTML = `
      <div class="flex items-center gap-2 sm:gap-3">
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm sm:text-base">${message}</span>
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

  // Handle file upload - FIXED: using 'image' key instead of 'fibc_image'
  const handleFileUpload = async (file) => {
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('image', file); // Changed to 'image' as per your requirement

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
    
    if (!imageFile && !formData.fibc_image) {
      showErrorMessage('Please select an image');
      return;
    }

    if (!formData.fibc_title.trim()) {
      showErrorMessage('Please enter FIBC title');
      return;
    }

    if (!formData.fibc_specification.trim()) {
      showErrorMessage('Please enter FIBC specification');
      return;
    }

    try {
      setLoading(true);
      let imageUrl = formData.fibc_image;

      // If new file is selected, upload it
      if (imageFile) {
        console.log('Uploading new file...');
        const uploadResponse = await handleFileUpload(imageFile);
        console.log('Upload response:', uploadResponse);
        
        // Extract image URL from the response
        imageUrl = uploadResponse.path;
        
        if (!imageUrl) {
          console.error('No image URL in response. Full response:', uploadResponse);
          throw new Error('Failed to get image URL from upload response');
        }
        
        console.log('Final image URL:', imageUrl);
      }

      const fibcData = {
        fibc_image: imageUrl, // Make sure this matches your API expected key
        fibc_title: formData.fibc_title.trim(),
        fibc_specification: formData.fibc_specification.trim(),
        status: formData.status,
      };

      console.log('Sending FIBC data:', fibcData);

      if (editingId) {
        // Update existing FIBC
        await httpClient.put('/update_FIBC', { ...fibcData, _id: editingId });
        showSuccessMessage('FIBC updated successfully!');
      } else {
        // Create new FIBC
        await httpClient.post('/create_FIBC', fibcData);
        showSuccessMessage('FIBC created successfully!');
      }

      resetForm();
      fetchFIBCs();
    } catch (error) {
      console.error('Error saving FIBC:', error);
      showErrorMessage('Error saving FIBC: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (fibc) => {
    setFormData({
      fibc_image: fibc.fibc_image,
      fibc_title: fibc.fibc_title,
      fibc_specification: fibc.fibc_specification,
      status: fibc.status
    });
    setImagePreview(fibc.fibc_image);
    setEditingId(fibc._id);
    setImageFile(null);
    setShowForm(true);
  };

  // Handle delete with better confirmation
  const handleDelete = async (id) => {
    const confirmed = await showDeleteConfirmation();
    if (confirmed) {
      try {
        await httpClient.delete(`/delete_FIBC/${id}`);
        showSuccessMessage('FIBC deleted successfully!');
        fetchFIBCs();
      } catch (error) {
        console.error('Error deleting FIBC:', error);
        showErrorMessage('Error deleting FIBC');
      }
    }
  };

  // Custom delete confirmation modal
  const showDeleteConfirmation = () => {
    return new Promise((resolve) => {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
      modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-sm w-full p-4 sm:p-6 mx-2">
          <div class="text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Delete FIBC</h3>
            <p class="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Are you sure you want to delete this FIBC? This action cannot be undone.</p>
            <div class="flex gap-2 sm:gap-3">
              <button id="cancel-btn" class="flex-1 px-3 sm:px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Cancel
              </button>
              <button id="confirm-btn" class="flex-1 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base">
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
      fibc_image: '',
      fibc_title: '',
      fibc_specification: '',
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

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">FIBC Master</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your FIBC products and specifications</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <FiPlus className="text-lg" />
            Add FIBC
          </button>
        </div>

        {/* FIBC Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {editingId ? 'Edit FIBC' : 'Add New FIBC'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <FiX className="text-xl sm:text-2xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FIBC Image
                  </label>
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <div className="w-full max-w-xs mx-auto">
                      <div className={`border-2 border-dashed rounded-lg p-3 sm:p-4 text-center transition-colors duration-200 ${
                        imagePreview || formData.fibc_image ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-green-400'
                      }`}>
                        {imagePreview || formData.fibc_image ? (
                          <img
                            src={imagePreview || formData.fibc_image}
                            alt="FIBC preview"
                            className="w-full h-32 object-contain rounded-lg mx-auto"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/300x200?text=Image+Error';
                            }}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                            <FiImage className="w-8 h-8 mb-2" />
                            <p className="text-sm">Click to upload image</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-2 file:py-1 file:px-3 sm:file:py-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
                      required={!editingId}
                    />
                    <p className="text-xs text-gray-500 text-center">
                      {editingId ? 'Select a new image to replace the current one' : 'Select an image to upload (Max 5MB)'}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FIBC Title
                  </label>
                  <input
                    type="text"
                    name="fibc_title"
                    value={formData.fibc_title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter FIBC title (e.g., HDPE Jumbo Bag)"
                    required
                  />
                </div>

                {/* Specification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FIBC Specification
                  </label>
                  <textarea
                    name="fibc_specification"
                    value={formData.fibc_specification}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical text-sm sm:text-base"
                    placeholder="Enter FIBC specifications and description"
                    required
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 sm:gap-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-3 sm:px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {loading ? 'Saving...' : (editingId ? 'Update' : 'Create')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* FIBCs Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {loading && !showForm ? (
            <div className="flex justify-center items-center p-6 sm:p-8">
              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gradient-to-r from-green-50 to-amber-50">
                  <tr>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      SR No
                    </th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      FIBC Image
                    </th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Title
                    </th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Specification
                    </th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Status
                    </th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {fibcs.map((fibc, index) => (
                    <tr key={fibc._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="flex items-center justify-center sm:justify-start">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-100 rounded-lg border">
                            <img
                              src={fibc.fibc_image}
                              alt={`FIBC ${fibc.fibc_title}`}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/100x100?text=Image+Error';
                                e.target.className = 'w-8 h-8 object-contain';
                              }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="max-w-[150px] sm:max-w-xs">
                          <p className="text-sm font-medium text-gray-900 truncate" title={fibc.fibc_title}>
                            {fibc.fibc_title}
                          </p>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="max-w-[200px]">
                          <p className="text-sm text-gray-600 line-clamp-2" title={fibc.fibc_specification}>
                            {fibc.fibc_specification}
                          </p>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          fibc.status === 'active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {fibc.status.charAt(0).toUpperCase() + fibc.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button
                            onClick={() => handleEdit(fibc)}
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors duration-200 p-1 sm:p-2 rounded-lg hover:bg-green-50 text-xs sm:text-sm"
                            title="Edit"
                          >
                            <FiEdit className="text-base sm:text-lg" />
                            <span className="hidden xs:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(fibc._id)}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200 p-1 sm:p-2 rounded-lg hover:bg-red-50 text-xs sm:text-sm"
                            title="Delete"
                          >
                            <FiTrash2 className="text-base sm:text-lg" />
                            <span className="hidden xs:inline">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {fibcs.length === 0 && (
                <div className="text-center py-8 sm:py-12 text-gray-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <FiPlus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-gray-600 mb-2">No FIBCs found</p>
                  <p className="text-gray-500 mb-4 text-sm sm:text-base">Get started by creating your first FIBC</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    <FiPlus className="text-lg" />
                    Add Your First FIBC
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

export default FIBCMaster;