"use client";

export default function BailForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <form className="max-w-4xl mx-auto space-y-10 bg-slate-800 rounded-lg shadow-2xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Bail Application Form</h1>
          <p className="text-gray-400">Please fill in all the required information accurately</p>
        </div>

        {/* =========================
            APPLICANT DETAILS
        ========================= */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600">
            Applicant Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Residential Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                rows={3}
                required
                placeholder="Village, Police Station, District"
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Occupation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="occupation"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Religion
              </label>
              <input
                type="text"
                name="religion"
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Educational Qualification <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="education"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                ID Proof Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="idProof"
                required
                placeholder="Aadhar, PAN, Passport, etc."
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>
          </div>
        </div>


        {/* =========================
            CURRENT CASE FIR DETAILS
        ========================= */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600">
            Current Case / FIR Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Case/FIR Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="caseNumber"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                FIR Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="firDate"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Police Station <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="policeStation"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Date of Incident <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="incidentDate"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Applicable Sections (IPC/Acts) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sections"
                required
                placeholder="e.g., 498A, 406, etc."
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>
          </div>
        </div>


        {/* =========================
            SECTION 161 STATEMENT
        ========================= */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600">
            Statement Recorded Under Section 161
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Date of Statement <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="statementDate"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Statement Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="statementDetails"
                rows={4}
                required
                placeholder="Enter the detailed statement..."
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition resize-none"
              />
            </div>
          </div>
        </div>


        {/* =========================
            BAIL REJECTION DETAILS
        ========================= */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600">
            Bail Rejection Order Details
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Date of Rejection <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="rejectionDate"
                required
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Rejection Order Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="rejectionOrder"
                rows={3}
                required
                placeholder="Details of the bail application rejection by the court..."
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition resize-none"
              />
            </div>
          </div>
        </div>

        {/* =========================
            DOCUMENT UPLOAD
        ========================= */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600">
            Supporting Documents
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Upload Document <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="documents"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-slate-500 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-slate-600 transition group">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-blue-300 transition">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Document Description
              </label>
              <textarea
                name="documentDescription"
                rows={2}
                placeholder="Brief description of the documents uploaded..."
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700 transition resize-none"
              />
            </div>
          </div>
        </div>


        {/* =========================
            SUBMIT BUTTON
        ========================= */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition shadow-lg hover:shadow-blue-500/50"
          >
            Submit Application
          </button>
          <button
            type="reset"
            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-4 rounded-lg transition"
          >
            Clear Form
          </button>
        </div>

      </form>
    </div>
  );
}
