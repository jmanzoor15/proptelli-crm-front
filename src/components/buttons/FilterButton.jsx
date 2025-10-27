import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFromCalendar, setShowFromCalendar] = useState(false);
  const [showToCalendar, setShowToCalendar] = useState(false);
  const [filters, setFilters] = useState({
    partnerType: "All",
    verificationStatus: "",
    referralLevel: "",
    dateFrom: "11 - Jun - 2025",
    dateTo: "11 - Aug - 2025",
    bdm: "",
  });

  const partnerTypes = ["All", "Company", "Individual"];
  const verificationStatuses = ["Verified", "Pending", "Rejected"];
  const referralLevels = ["Level 1", "Level 2", "Level 3"];
  const bdmOptions = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Sarah Williams",
  ];

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDateType, setSelectedDateType] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const formatDateString = (date) => {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " - ");
  };

  const handleQuickDate = (range) => {
    const today = new Date();
    let from = new Date();

    switch (range) {
      case "Today":
        from = today;
        break;
      case "This Week":
        from = new Date(today.setDate(today.getDate() - 7));
        break;
      case "Last Week":
        from = new Date(today.setDate(today.getDate() - 14));
        break;
      case "This Month":
        from = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      default:
        break;
    }

    setFilters((prev) => ({
      ...prev,
      dateFrom: formatDateString(from),
      dateTo: formatDateString(new Date()),
    }));
  };

  const resetFilters = () => {
    setFilters({
      partnerType: "All",
      verificationStatus: "",
      referralLevel: "",
      dateFrom: "11 - Jun - 2025",
      dateTo: "11 - Aug - 2025",
      bdm: "",
    });
  };

  const getActiveFiltersCount = () => {
    return Object.entries(filters).filter(([key, value]) => {
      if (key === "partnerType") return value !== "All";
      return value !== "";
    }).length;
  };

  const applyFilters = () => {
    const activeFilters = getActiveFiltersCount();
    console.log("Applying filters:", filters);
    alert(`Filters applied! ${activeFilters} active filters found`);
    setIsOpen(false);
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const formattedDate = formatDateString(selectedDate);

    if (selectedDateType === "from") {
      handleFilterChange("dateFrom", formattedDate);
      setShowFromCalendar(false);
    } else if (selectedDateType === "to") {
      handleFilterChange("dateTo", formattedDate);
      setShowToCalendar(false);
    }
  };

  const changeMonth = (direction) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  const openCalendar = (type) => {
    setSelectedDateType(type);
    setCurrentMonth(new Date());
    if (type === "from") {
      setShowFromCalendar(true);
      setShowToCalendar(false);
    } else {
      setShowToCalendar(true);
      setShowFromCalendar(false);
    }
  };

  const CalendarPicker = ({ show }) => {
    if (!show) return null;

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const monthYear = currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          className="p-2 hover:bg-yellow-100 rounded-lg text-sm transition-colors"
        >
          {day}
        </button>
      );
    }

    return (
      <div className="absolute z-50 bg-white border border-gray-300 rounded-2xl shadow-lg p-4 mt-2 w-80">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-semibold text-sm">{monthYear}</span>
          <button
            onClick={() => changeMonth(1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .sidebar-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 50;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .sidebar-overlay.open {
          opacity: 1;
        }
        
        .sidebar-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 516px;
          background-color: white;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 51;
          overflow-y: auto;
        }
        
        .sidebar-panel.open {
          transform: translateX(0);
        }
      `}</style>

      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 bg-black text-white rounded-full h-[50px] w-[137px] hover:bg-gray-900 transition-colors"
      >
        <img src="/icons/filter-icon.svg" alt="filter" />
        <span className="font-medium text-md">Filter</span>
      </button>

      {/* Overlay */}
      <div
        className={` sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        style={{ display: isOpen ? "block" : "none" }}
      />

      {/* Sidebar Panel */}
      <div className={`sidebar-panel ${isOpen ? "open" : ""}`}>
        <div className="sticky top-0 bg-goldgreen text-white px-[19px] py-4 h-[55px] rounded-30 mt-[20px] mb-[20px] mx-[18px] flex items-center justify-between z-10">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white hover:bg-opacity-20 bg-goldgreen rounded-full p-1.5 transition-colors"
          >
            <img
              className="w-[22px] h-[18px]"
              src="/icons/backforwardarrow-icon.svg"
              alt="Back Arrow"
            />
          </button>
        </div>

        <div className="p-6 px-[19px] space-y-5">
          {/* Partner Type */}
          <div>
            <label className="block text-base font-semibold mb-2.5 text-black">
              Partner Type
            </label>
            <div className="border border-darkgreywhite h-[60px] p-1.5 rounded-30">
              <div className="grid grid-cols-3 gap-2.5 ">
                {partnerTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange("partnerType", type)}
                    className={`py-2.5 px-3 rounded-30 h-[47px] border text-xss font-normal transition-all ${
                      filters.partnerType === type
                        ? "bg-goldgreen text-white"
                        : "bg-white border-gray-300 text-black hover:border-gray-400"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div>
            <label className="block text-base font-semibold mb-2.5 text-black">
              Verification Status
            </label>
            <div className="border border-darkgreywhite h-[60px] p-1.5 rounded-30">
              <div className="grid grid-cols-3 gap-2.5">
                {verificationStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() =>
                      handleFilterChange("verificationStatus", status)
                    }
                    className={`py-2.5 px-3 rounded-30 h-[47px] border text-xss font-normal transition-all ${
                      filters.verificationStatus === status
                        ? "bg-goldgreen text-white"
                        : "bg-white border-gray-300 text-black hover:border-gray-400"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Referral Level */}
          <div>
            <label className="block text-base font-semibold mb-2.5 text-black">
              Referral Level
            </label>
            <div className="border border-darkgreywhite h-[60px] p-1.5 rounded-30">
              <div className="grid grid-cols-3 gap-2.5">
                {referralLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => handleFilterChange("referralLevel", level)}
                    className={`py-2.5 px-3 rounded-30 h-[47px] border text-xss font-normal transition-all ${
                      filters.referralLevel === level
                        ? "bg-goldgreen text-white"
                        : "bg-white border-gray-300 text-black hover:border-gray-400"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Created On */}
          <div>
            <label className="block text-base font-semibold mb-2.5 text-black">
              Created On
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-black mb-1.5 text-sm font-normal">
                  From
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.dateFrom}
                    readOnly
                    onClick={() => openCalendar("from")}
                    className="w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-3xl h-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm font-normal cursor-pointer"
                  />
                  <img
                    className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                    src="/icons/calender-icon.svg"
                    alt="calender"
                  />
                  <CalendarPicker
                    show={showFromCalendar}
                    onClose={() => setShowFromCalendar(false)}
                  />
                </div>
              </div>
              <div>
                <label className="block  text-black mb-1.5 text-sm font-normal">
                  To
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.dateTo}
                    readOnly
                    onClick={() => openCalendar("to")}
                    className="w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-3xl h-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm cursor-pointer"
                  />
                  <img
                    className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                    src="/icons/calender-icon.svg"
                    alt="calender"
                  />
                  <CalendarPicker
                    show={showToCalendar}
                    onClose={() => setShowToCalendar(false)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Today", "This Week", "Last Week", "This Month"].map(
                (range) => (
                  <button
                    key={range}
                    onClick={() => handleQuickDate(range)}
                    className="py-2 px-2 text-sm font-normal rounded-xl h-12 border border-gray-300 bg-white text-black hover:border-gray-400 transition-colors"
                  >
                    {range}
                  </button>
                )
              )}
            </div>
          </div>

          {/* BDM */}
          <div>
            <label className="block text-base font-semibold mb-2.5 text-black">
              Business Development Manager (BDM)
            </label>
            <div className="relative">
              <select
                value={filters.bdm}
                onChange={(e) => handleFilterChange("bdm", e.target.value)}
                className="w-full py-2.5 px-3 h-[59px] pr-10 border border-gray-300 rounded-30 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white font-normal text-xss text-black"
              >
                <option value="">Select BDM</option>
                {bdmOptions.map((bdm) => (
                  <option key={bdm} value={bdm}>
                    {bdm}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-5 text-gray-400 pointer-events-none"
                size={16}
                color="black"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sticky bottom-0 bg-white p-6 px-[19px] flex gap-3 border-t">
          <button
            onClick={resetFilters}
            className=" py-3 border-2 border-gray-300 h-[55px] w-[153px] rounded-full hover:bg-gray-50 transition-colors font-normal text-md text-black"
          >
            Reset All
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 py-3 bg-black text-white rounded-full hover:bg-gray-800 h-[55px] transition-colors font-normal text-md"
          >
            Apply Filters ( {getActiveFiltersCount()} Results Found )
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterButton;
