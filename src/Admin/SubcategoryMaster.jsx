import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import httpClient from '../Api/axios'; 

function SubcategoryMaster() {
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    gsm_name: '',
    gsm_image: '',
    category_id: '',
    status: 'active'
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Fetch all subcategories
  const fetchSubcategories = async () => {
    try {
      setLoading(true);
      const response = await httpClient.get('/getAllSubCategory');
      setSubcategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      showErrorMessage('Error fetching subcategories');
    } finally {
      setLoading(false);
    }
  };

  // Fetch all categories for dropdown
  const fetchCategories = async () => {
    try {
      const response = await httpClient.get('/getAllCategory');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      showErrorMessage('Error fetching categories');
    }
  };

  useEffect(() => {
    fetchSubcategories();
    fetchCategories();
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
    
    if (!formData.gsm_name.trim()) {
      showErrorMessage('Please enter subcategory name');
      return;
    }

    if (!formData.category_id) {
      showErrorMessage('Please select a category');
      return;
    }

    if (!imageFile && !formData.gsm_image) {
      showErrorMessage('Please select an image');
      return;
    }

    try {
      setLoading(true);
      let imageUrl = formData.gsm_image;

      // If new file is selected, upload it
      if (imageFile) {
        console.log('Uploading new file...');
        const uploadResponse = await handleFileUpload(imageFile);
        console.log('Upload response:', uploadResponse);
        
        // Extract image URL from the response
        imageUrl = uploadResponse.path;
        
        if (!imageUrl) {
          console.error('No image URL in response. Full response:', uploadResponse);
          throw new Error('Failed to get image URL from upload response. Please check the backend response structure.');
        }
        
        console.log('Final image URL:', imageUrl);
      }

      const subcategoryData = {
        gsm_name: formData.gsm_name.trim(),
        gsm_image: imageUrl,
        categoryId: formData.category_id,
        status: formData.status,
      };

      console.log('Sending subcategory data:', subcategoryData);

      if (editingId) {
        // Update existing subcategory
        await httpClient.put('/update_SubCategory', { ...subcategoryData, _id: editingId });
        showSuccessMessage('Subcategory updated successfully!');
      } else {
        // Create new subcategory
        await httpClient.post('/create_subcategory', subcategoryData);
        showSuccessMessage('Subcategory created successfully!');
      }

      resetForm();
      fetchSubcategories();
    } catch (error) {
      console.error('Error saving subcategory:', error);
      showErrorMessage('Error saving subcategory: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (subcategory) => {
    setFormData({
      gsm_name: subcategory.gsm_name,
      gsm_image: subcategory.gsm_image,
      category_id: subcategory.categoryId?._id || subcategory.category_id || '',
      status: subcategory.status
    });
    setImagePreview(subcategory.gsm_image);
    setEditingId(subcategory._id);
    setImageFile(null);
    setShowForm(true);
  };

  // Handle delete with better confirmation
  const handleDelete = async (id) => {
    const confirmed = await showDeleteConfirmation();
    if (confirmed) {
      try {
        await httpClient.delete(`/delete_SubCategory/${id}`);
        showSuccessMessage('Subcategory deleted successfully!');
        fetchSubcategories();
      } catch (error) {
        console.error('Error deleting subcategory:', error);
        showErrorMessage('Error deleting subcategory');
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
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Delete Subcategory</h3>
            <p class="text-gray-600 mb-6">Are you sure you want to delete this subcategory? This action cannot be undone.</p>
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
      gsm_name: '',
      gsm_image: '',
      category_id: '',
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Subcategory Management</h1>
            <p className="text-gray-600 mt-1">Manage your product subcategories</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FiPlus className="text-lg" />
            Add Subcategory
          </button>
        </div>

        {/* Subcategory Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? 'Edit Subcategory' : 'Add New Subcategory'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData(prev => ({ ...prev, category_id: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subcategory Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.gsm_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, gsm_name: e.target.value }))}
                    placeholder="Enter subcategory name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory Image <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col items-center space-y-4">
                    {(imagePreview || (editingId && formData.gsm_image)) && (
                      <div className="w-full max-w-xs">
                        <img
                          src={imagePreview || formData.gsm_image}
                          alt="Subcategory preview"
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

        {/* Subcategories Table */}
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
                      Image
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Subcategory Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Category
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
                  {subcategories.map((subcategory, index) => (
                    <tr key={subcategory._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={subcategory.gsm_image}
                            alt={subcategory.gsm_name}
                            className="h-16 w-16 object-cover rounded-lg border shadow-sm"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {subcategory.gsm_name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {subcategory.categoryId?.name || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          subcategory.status === 'active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {subcategory.status.charAt(0).toUpperCase() + subcategory.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(subcategory)}
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
                            title="Edit"
                          >
                            <FiEdit className="text-lg" />
                            <span className="text-sm hidden sm:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(subcategory._id)}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50"
                            title="Delete"
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

              {subcategories.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <FiPlus className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium text-gray-600 mb-2">No subcategories found</p>
                  <p className="text-gray-500 mb-4">Get started by creating your first subcategory</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FiPlus className="text-lg" />
                    Add Your First Subcategory
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

export default SubcategoryMaster;