import React, { useContext, useState } from "react";
import { GlobalState } from "../context";

function UploadImageModal() {
  const { openUploadModal, setOpenUploadModal } = useContext(GlobalState);
  const closeUploadImageModalHandler = () => {
    setOpenUploadModal(false);
  };
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-[90%] md:w-[70%] lg:w-[50%]">
          <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="w-full h-[200px] border-2 border-dashed border-[#00e0bf] flex flex-col justify-center items-center"
              ></label>
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                // onChange={handleImageUpload}
                className="hidden w-full rounded border-2 border-gray-200 p-2 bg-transparent"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={closeUploadImageModalHandler}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  closeUploadImageModalHandler();
                }}
                className="px-4 py-2 bg-[#00e0bf] text-white rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadImageModal;
