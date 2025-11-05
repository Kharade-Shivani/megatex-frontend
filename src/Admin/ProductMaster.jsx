import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX, FiImage } from 'react-icons/fi';
import httpClient from '../Api/axios';

function ProductMaster() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ProductName: '',
    Category: '',
    Subcategory: '',
    ProductDescription: '',
    Brand: '',
    Material: '',
    GSM_Thickness: '',
    Size: '',
    Type: '',
    JointType: '',
    FabricType: '',
    Eyelets: '',
    Lifespan: '',
    Color: '',
    SealingType: '',
    Accessories: '',
    KeyFeatures: '',
    Advantages: '',
    Application: '',
    image: '', // Changed from images[] to image (string)
    subImages: [],
    OriginOfCountry: 'India',
    MfgBy: '',
    status: 'active'
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Changed to single file
  const [subImageFiles, setSubImageFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(''); // Changed to single preview
  const [subImagePreviews, setSubImagePreviews] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await httpClient.get('/getAllProduct');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      showErrorMessage('Error fetching products');
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

  // Fetch subcategories based on selected category
  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await httpClient.get('/getAllSubCategory');
      const filteredSubcategories = response.data.filter(
        subcat => subcat.categoryId?._id === categoryId || subcat.category_id === categoryId
      );
      setSubcategories(filteredSubcategories);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      showErrorMessage('Error fetching subcategories');
    }
  };

  useEffect(() => {
    fetchProducts();
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

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

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

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

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
      
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('File upload failed');
    }
  };

  // Handle multiple file uploads
  const handleMultipleFileUpload = async (files) => {
    const uploadedUrls = [];
    for (const file of files) {
      try {
        const uploadResponse = await handleFileUpload(file);
        uploadedUrls.push(uploadResponse.path);
      } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('File upload failed');
      }
    }
    return uploadedUrls;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.ProductName.trim()) {
      showErrorMessage('Please enter product name');
      return;
    }

    if (!formData.Category) {
      showErrorMessage('Please select a category');
      return;
    }

    if (!formData.Subcategory) {
      showErrorMessage('Please select a subcategory');
      return;
    }

    try {
      setLoading(true);

      let imageUrl = formData.image;
      let subImageUrls = [...formData.subImages];

      // Upload new main image
      if (imageFile) {
        const uploadResponse = await handleFileUpload(imageFile);
        imageUrl = uploadResponse.path;
      }

      // Upload new sub images
      if (subImageFiles.length > 0) {
        const uploadedUrls = await handleMultipleFileUpload(subImageFiles);
        subImageUrls = [...subImageUrls, ...uploadedUrls];
      }

      const productData = {
        ...formData,
        image: imageUrl,
        subImages: subImageUrls,
      };

      if (editingId) {
        // Update existing product
        await httpClient.put('/update_Product', { ...productData, _id: editingId });
        showSuccessMessage('Product updated successfully!');
      } else {
        // Create new product
        await httpClient.post('/create_product', productData);
        showSuccessMessage('Product created successfully!');
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      showErrorMessage('Error saving product: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setFormData({
      ProductName: product.ProductName || '',
      Category: product.Category?._id || product.Category || '',
      Subcategory: product.Subcategory?._id || product.Subcategory || '',
      ProductDescription: product.ProductDescription || '',
      Brand: product.Brand || '',
      Material: product.Material || '',
      GSM_Thickness: product.GSM_Thickness || '',
      Size: product.Size || '',
      Type: product.Type || '',
      JointType: product.JointType || '',
      FabricType: product.FabricType || '',
      Eyelets: product.Eyelets || '',
      Lifespan: product.Lifespan || '',
      Color: product.Color || '',
      SealingType: product.SealingType || '',
      Accessories: product.Accessories || '',
      KeyFeatures: product.KeyFeatures || '',
      Advantages: product.Advantages || '',
      Application: product.Application || '',
      image: product.image || '', // Changed from images to image
      subImages: product.subImages || [],
      OriginOfCountry: product.OriginOfCountry || 'India',
      MfgBy: product.MfgBy || '',
      status: product.status || 'active'
    });

    setImagePreview(product.image || ''); // Single image preview
    setSubImagePreviews(product.subImages || []);
    setEditingId(product._id);
    setImageFile(null); // Single file
    setSubImageFiles([]);
    
    // Fetch subcategories for the selected category
    if (product.Category?._id) {
      fetchSubcategories(product.Category._id);
    }
    
    setShowForm(true);
  };

  // Handle delete with confirmation
  const handleDelete = async (id) => {
    const confirmed = await showDeleteConfirmation();
    if (confirmed) {
      try {
        await httpClient.delete(`/delete_Product/${id}`);
        showSuccessMessage('Product deleted successfully!');
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        showErrorMessage('Error deleting product');
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
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Delete Product</h3>
            <p class="text-gray-600 mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
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
      ProductName: '',
      Category: '',
      Subcategory: '',
      ProductDescription: '',
      Brand: '',
      Material: '',
      GSM_Thickness: '',
      Size: '',
      Type: '',
      JointType: '',
      FabricType: '',
      Eyelets: '',
      Lifespan: '',
      Color: '',
      SealingType: '',
      Accessories: '',
      KeyFeatures: '',
      Advantages: '',
      Application: '',
      image: '', // Changed from images[] to empty string
      subImages: [],
      OriginOfCountry: 'India',
      MfgBy: '',
      status: 'active'
    });
    setImagePreview(''); // Reset single preview
    setSubImagePreviews([]);
    setEditingId(null);
    setImageFile(null); // Reset single file
    setSubImageFiles([]);
    setShowForm(false);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setFormData(prev => ({ 
      ...prev, 
      Category: categoryId,
      Subcategory: '' // Reset subcategory when category changes
    }));
    if (categoryId) {
      fetchSubcategories(categoryId);
    } else {
      setSubcategories([]);
    }
  };

  // Handle main image file input change (single image)
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showErrorMessage('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showErrorMessage('Image size should be less than 5MB');
      return;
    }

    setImageFile(file);
    
    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  // Handle sub image file input change (multiple images)
  const handleSubImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        showErrorMessage('Please select image files only');
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        showErrorMessage('Image size should be less than 5MB');
        return false;
      }
      return true;
    });

    setSubImageFiles(prev => [...prev, ...validFiles]);
    
    // Create preview URLs
    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    setSubImagePreviews(prev => [...prev, ...newPreviews]);
  };

  // Remove main image
  const removeMainImage = () => {
    setImagePreview('');
    setImageFile(null);
    setFormData(prev => ({
      ...prev,
      image: ''
    }));
  };

  // Remove sub image
  const removeSubImage = (index) => {
    setSubImagePreviews(prev => prev.filter((_, i) => i !== index));
    setSubImageFiles(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      subImages: prev.subImages.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Product Management</h1>
            <p className="text-gray-600 mt-1">Manage your products and inventory</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FiPlus className="text-lg" />
            Add Product
          </button>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ProductName}
                      onChange={(e) => setFormData(prev => ({ ...prev, ProductName: e.target.value }))}
                      placeholder="Enter product name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  {/* Category and Subcategory */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.Category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subcategory <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.Subcategory}
                      onChange={(e) => setFormData(prev => ({ ...prev, Subcategory: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      required
                      disabled={!formData.Category}
                    >
                      <option value="">Select Subcategory</option>
                      {subcategories.map((subcategory) => (
                        <option key={subcategory._id} value={subcategory._id}>
                          {subcategory.gsm_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Brand and Material */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={formData.Brand}
                      onChange={(e) => setFormData(prev => ({ ...prev, Brand: e.target.value }))}
                      placeholder="Enter brand"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material
                    </label>
                    <input
                      type="text"
                      value={formData.Material}
                      onChange={(e) => setFormData(prev => ({ ...prev, Material: e.target.value }))}
                      placeholder="Enter material"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* GSM Thickness and Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GSM Thickness
                    </label>
                    <input
                      type="text"
                      value={formData.GSM_Thickness}
                      onChange={(e) => setFormData(prev => ({ ...prev, GSM_Thickness: e.target.value }))}
                      placeholder="Enter GSM thickness"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Size
                    </label>
                    <input
                      type="text"
                      value={formData.Size}
                      onChange={(e) => setFormData(prev => ({ ...prev, Size: e.target.value }))}
                      placeholder="Enter size"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Type and Joint Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <input
                      type="text"
                      value={formData.Type}
                      onChange={(e) => setFormData(prev => ({ ...prev, Type: e.target.value }))}
                      placeholder="Enter type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Joint Type
                    </label>
                    <input
                      type="text"
                      value={formData.JointType}
                      onChange={(e) => setFormData(prev => ({ ...prev, JointType: e.target.value }))}
                      placeholder="Enter joint type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Fabric Type and Eyelets */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fabric Type
                    </label>
                    <input
                      type="text"
                      value={formData.FabricType}
                      onChange={(e) => setFormData(prev => ({ ...prev, FabricType: e.target.value }))}
                      placeholder="Enter fabric type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eyelets
                    </label>
                    <input
                      type="text"
                      value={formData.Eyelets}
                      onChange={(e) => setFormData(prev => ({ ...prev, Eyelets: e.target.value }))}
                      placeholder="Enter eyelets"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Lifespan and Color */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lifespan
                    </label>
                    <input
                      type="text"
                      value={formData.Lifespan}
                      onChange={(e) => setFormData(prev => ({ ...prev, Lifespan: e.target.value }))}
                      placeholder="Enter lifespan"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      value={formData.Color}
                      onChange={(e) => setFormData(prev => ({ ...prev, Color: e.target.value }))}
                      placeholder="Enter color"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Sealing Type and Accessories */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sealing Type
                    </label>
                    <input
                      type="text"
                      value={formData.SealingType}
                      onChange={(e) => setFormData(prev => ({ ...prev, SealingType: e.target.value }))}
                      placeholder="Enter sealing type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accessories
                    </label>
                    <input
                      type="text"
                      value={formData.Accessories}
                      onChange={(e) => setFormData(prev => ({ ...prev, Accessories: e.target.value }))}
                      placeholder="Enter accessories"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Origin of Country and Manufactured By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Origin of Country
                    </label>
                    <input
                      type="text"
                      value={formData.OriginOfCountry}
                      onChange={(e) => setFormData(prev => ({ ...prev, OriginOfCountry: e.target.value }))}
                      placeholder="Enter origin country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Manufactured By
                    </label>
                    <input
                      type="text"
                      value={formData.MfgBy}
                      onChange={(e) => setFormData(prev => ({ ...prev, MfgBy: e.target.value }))}
                      placeholder="Enter manufacturer"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Product Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Description
                    </label>
                    <textarea
                      value={formData.ProductDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, ProductDescription: e.target.value }))}
                      placeholder="Enter product description"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Key Features and Advantages */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Key Features
                    </label>
                    <textarea
                      value={formData.KeyFeatures}
                      onChange={(e) => setFormData(prev => ({ ...prev, KeyFeatures: e.target.value }))}
                      placeholder="Enter key features"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Advantages
                    </label>
                    <textarea
                      value={formData.Advantages}
                      onChange={(e) => setFormData(prev => ({ ...prev, Advantages: e.target.value }))}
                      placeholder="Enter advantages"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Application */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Application
                    </label>
                    <input
                      type="text"
                      value={formData.Application}
                      onChange={(e) => setFormData(prev => ({ ...prev, Application: e.target.value }))}
                      placeholder="Enter application areas"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Status */}
                  <div className="md:col-span-2">
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

                  {/* Main Image Upload (Single Image) */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Image
                    </label>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {imagePreview && (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Main preview"
                              className="w-24 h-24 object-cover rounded-lg border shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={removeMainImage}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                              <FiX className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleMainImageChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Sub Images Upload (Multiple Images) */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sub Images
                    </label>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {subImagePreviews.map((preview, index) => (
                          <div key={index} className="relative">
                            <img
                              src={preview}
                              alt={`Sub preview ${index + 1}`}
                              className="w-24 h-24 object-cover rounded-lg border shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeSubImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                              <FiX className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleSubImageChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
                      />
                    </div>
                  </div>
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

        {/* Products Table */}
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
                      Product Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Subcategory
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Brand
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Material
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
                  {products.map((product, index) => (
                    <tr key={product._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.ProductName}
                              className="h-16 w-16 object-cover rounded-lg border shadow-sm"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                              }}
                            />
                          ) : (
                            <div className="h-16 w-16 bg-gray-100 rounded-lg border flex items-center justify-center">
                              <FiImage className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.ProductName}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {product.Category?.name || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {product.Subcategory?.gsm_name || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {product.Brand || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {product.Material || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          product.status === 'active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {product.status?.charAt(0).toUpperCase() + product.status?.slice(1) || 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
                            title="Edit"
                          >
                            <FiEdit className="text-lg" />
                            <span className="text-sm hidden sm:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
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

              {products.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <FiPlus className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium text-gray-600 mb-2">No products found</p>
                  <p className="text-gray-500 mb-4">Get started by creating your first product</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FiPlus className="text-lg" />
                    Add Your First Product
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

export default ProductMaster;