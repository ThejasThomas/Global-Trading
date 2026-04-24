import { useState } from "react";

interface ServiceCardProps {
  name: string;
  details: string;
  more: string;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ServiceCard = ({
  name,
  details,
  more,
  isAdmin = false,
  onEdit,
  onDelete,
}: ServiceCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gradient-to-br from-green-900 to-green-700 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between min-h-[260px]">

      {/* CONTENT */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-200 mb-3">{details}</p>

        {/* 🔥 MORE CONTENT */}
        {showMore && (
          <p className="text-xs text-gray-300 mt-2">{more}</p>
        )}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>

        {/* ADMIN BUTTONS */}
        {isAdmin && (
          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="bg-yellow-400 text-black px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={onDelete}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;