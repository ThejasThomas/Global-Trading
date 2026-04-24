import { useEffect, useState } from 'react';
import {
  deleteService,
  getServices,
  addService,
  updateService,
} from '../services/service/service.api';
import { Trash2, Edit2, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { toast } from 'react-toastify';
interface Service {
  _id: string;
  name: string;
  details: string;
  more: string;
}

interface FormData {
  name: string;
  details: string;
  more: string;
}

const AdminDashboard: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    details: '',
    more: '',
  });

  const fetchServices = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await getServices(page, 6);
      setServices(res.data.services);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [page]);

const handleDelete = (id: string): void => {
  toast.info(
    ({ closeToast }) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">
          Are you sure you want to delete?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={closeToast}
            className="px-3 py-1 bg-gray-600 rounded"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              try {
                await deleteService(id);
                toast.success('Deleted successfully');
                fetchServices();
              } catch {
                toast.error('Delete failed');
              }
              closeToast?.();
            }}
            className="px-3 py-1 bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ),
    {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
    }
  );
};

  const handleAdd = (): void => {
    setEditingService(null);
    setForm({ name: '', details: '', more: '' });
    setShowModal(true);
  };

  const handleEdit = (service: Service): void => {
    setEditingService(service);
    setForm({
      name: service.name,
      details: service.details,
      more: service.more,
    });
    setShowModal(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (): Promise<void> => {
  if (!form.name.trim() || !form.details.trim()) {
    toast.error('Please fill in all required fields');
    return;
  }

  try {
    if (editingService) {
      await updateService(editingService._id, form);
      toast.success('Service updated successfully');
    } else {
      await addService(form);
      toast.success('Service created successfully');
    }

    setShowModal(false);
    setForm({ name: '', details: '', more: '' });
    setEditingService(null);
    fetchServices();
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong');
  }
};

  const handleCloseModal = (): void => {
    setShowModal(false);
    setEditingService(null);
    setForm({ name: '', details: '', more: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a1a10] text-white">
      {/* HEADER */}
      <div className="border-b border-green-900/30 bg-[#051108]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">Service Management</h1>
          <p className="text-green-300/60 text-sm">
            Create, edit, and manage your services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ACTION BUTTON */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-green-300/70 text-sm">
            Showing {services.length} services on page {page}
          </p>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-green-500/20"
          >
            <Plus size={20} />
            Add Service
          </button>
        </div>

        {/* SERVICES GRID */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-green-400 text-lg">Loading services...</div>
          </div>
        ) : services.length === 0 ? (
          <div className="border border-green-900/30 rounded-lg bg-green-900/5 p-12 text-center">
            <p className="text-green-300/60 mb-4">No services found</p>
            <button
              onClick={handleAdd}
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Create your first service
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="group border border-green-900/30 hover:border-green-500/50 bg-green-900/5 hover:bg-green-900/10 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                {/* SERVICE HEADER */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">
                      {service.name}
                    </h3>
                    <p className="text-green-300/60 text-xs">ID: {service._id.slice(-8)}</p>
                  </div>
                </div>

                {/* SERVICE CONTENT */}
                <p className="text-green-300/70 text-sm mb-4 line-clamp-2">
                  {service.details}
                </p>

                {service.more && (
                  <p className="text-green-300/50 text-xs mb-4 line-clamp-1 italic">
                    {service.more}
                  </p>
                )}

                {/* ACTION BUTTONS */}
                <div className="flex gap-2 pt-4 border-t border-green-900/20">
                  <button
                    onClick={() => handleEdit(service)}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/40 text-green-400 hover:text-green-300 font-semibold py-2 px-3 rounded transition-colors duration-200"
                  >
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 font-semibold py-2 px-3 rounded transition-colors duration-200"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {services.length > 0 && (
          <div className="flex justify-center items-center gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center gap-2 border border-green-900/30 hover:border-green-500/50 text-green-400 hover:text-green-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <ChevronLeft size={18} />
              Previous
            </button>
            <span className="text-green-300/60 text-sm font-medium px-4">
              Page {page}
            </span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-2 border border-green-900/30 hover:border-green-500/50 text-green-400 hover:text-green-300 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-[#0a1a10] border border-green-900/30 rounded-xl w-full max-w-md shadow-2xl shadow-green-500/10">
            {/* MODAL HEADER */}
            <div className="flex justify-between items-center border-b border-green-900/20 p-6">
              <h2 className="text-2xl font-bold text-white">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-green-300/60 hover:text-green-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  Service Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Global Trading & Export"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-green-900/10 border border-green-900/30 hover:border-green-500/30 focus:border-green-500/50 focus:outline-none text-white placeholder-green-300/40 rounded-lg px-4 py-2.5 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  Details *
                </label>
                <textarea
                  name="details"
                  placeholder="Describe the service..."
                  value={form.details}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-green-900/10 border border-green-900/30 hover:border-green-500/30 focus:border-green-500/50 focus:outline-none text-white placeholder-green-300/40 rounded-lg px-4 py-2.5 transition-colors duration-200 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  Additional Info
                </label>
                <input
                  type="text"
                  name="more"
                  placeholder="Optional additional information"
                  value={form.more}
                  onChange={handleChange}
                  className="w-full bg-green-900/10 border border-green-900/30 hover:border-green-500/30 focus:border-green-500/50 focus:outline-none text-white placeholder-green-300/40 rounded-lg px-4 py-2.5 transition-colors duration-200"
                />
              </div>
            </div>

            {/* MODAL ACTIONS */}
            <div className="flex justify-end gap-3 border-t border-green-900/20 p-6 bg-green-900/5">
              <button
                onClick={handleCloseModal}
                className="border border-green-900/30 hover:border-green-500/50 text-green-300 hover:text-green-200 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-green-500/20"
              >
                {editingService ? 'Update Service' : 'Create Service'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;