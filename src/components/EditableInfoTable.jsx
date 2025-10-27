import { useState } from 'react';

export default function EditableInfoTable({ 
  data = {
    firstName: 'Javed',
    lastName: 'Leon',
    email: 'javedleon@gmail.com',
    phoneNumber: '+971 765 432 6543',
    secondaryNumber: 'Not Provided'
  },
  labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    secondaryNumber: 'Secondary Number'
  },
  requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber'],
  readOnlyFields = [],
  onChange = null,
  className = ''
}) {
  const [formData, setFormData] = useState(data);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onChange?.(updated);
  };

  return (
    <div className={`bg-white rounded-30 border border-darkgreywhite px-[19px] p-10 ${className}`}>
      {Object.keys(formData).map(field => {
        const isRequired = requiredFields.includes(field);
        const isReadOnly = readOnlyFields.includes(field);
        
        return (
          <div key={field} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <label className="text-sm font-medium text-gray-700 min-w-[140px]">
              {labels[field] || field}
              {isRequired && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            <input
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              readOnly={isReadOnly}
              className={`flex-1 text-right text-sm px-3 py-2 rounded border border-transparent focus:border-blue-300 focus:bg-blue-50 outline-none transition-colors ${
                isReadOnly ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}