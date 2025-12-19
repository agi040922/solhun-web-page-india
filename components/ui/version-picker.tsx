"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface VersionPickerProps {
  value: string;
  onChange: (version: string) => void;
}

function parseVersion(version: string): { major: number; minor: number; patch: number } {
  const parts = version.split(".").map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
  };
}

function formatVersion(major: number, minor: number, patch: number): string {
  return `${major}.${minor}.${patch}`;
}

export function VersionPicker({ value, onChange }: VersionPickerProps) {
  const { major, minor, patch } = parseVersion(value);

  const [majorInput, setMajorInput] = useState(String(major));
  const [minorInput, setMinorInput] = useState(String(minor));
  const [patchInput, setPatchInput] = useState(String(patch));

  // 외부 value가 바뀌면 로컬 상태도 업데이트 (버튼 클릭 시)
  useEffect(() => {
    setMajorInput(String(major));
    setMinorInput(String(minor));
    setPatchInput(String(patch));
  }, [major, minor, patch]);

  const applyChanges = () => {
    let newMajor = parseInt(majorInput) || 0;
    let newMinor = parseInt(minorInput) || 0;
    let newPatch = parseInt(patchInput) || 0;

    newMajor = Math.max(0, Math.min(999, newMajor));
    newMinor = Math.max(0, Math.min(999, newMinor));
    newPatch = Math.max(0, Math.min(999, newPatch));

    setMajorInput(String(newMajor));
    setMinorInput(String(newMinor));
    setPatchInput(String(newPatch));

    onChange(formatVersion(newMajor, newMinor, newPatch));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      applyChanges();
      (e.target as HTMLInputElement).blur();
    }
  };

  const increment = (segment: "major" | "minor" | "patch") => {
    let newMajor = major;
    let newMinor = minor;
    let newPatch = patch;

    if (segment === "major") {
      newMajor = major + 1;
      newMinor = 0;
      newPatch = 0;
    } else if (segment === "minor") {
      newMinor = minor + 1;
      newPatch = 0;
    } else {
      newPatch = patch + 1;
    }

    onChange(formatVersion(newMajor, newMinor, newPatch));
  };

  const decrement = (segment: "major" | "minor" | "patch") => {
    let newMajor = major;
    let newMinor = minor;
    let newPatch = patch;

    if (segment === "major" && major > 0) newMajor = major - 1;
    else if (segment === "minor" && minor > 0) newMinor = minor - 1;
    else if (segment === "patch" && patch > 0) newPatch = patch - 1;

    onChange(formatVersion(newMajor, newMinor, newPatch));
  };

  const inputClass = "w-12 text-center text-sm font-mono font-medium bg-white border-y border-gray-200 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const btnClass = "p-1 hover:bg-gray-100 transition-colors";

  return (
    <div className="flex items-end gap-1">
      {/* Major */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-gray-400 uppercase mb-1">Major</span>
        <div className="flex flex-col items-center bg-gray-50 rounded-lg border border-gray-200">
          <button type="button" onClick={() => increment("major")} className={`${btnClass} rounded-t-lg`}>
            <ChevronUp size={14} className="text-gray-500" />
          </button>
          <input
            type="text"
            value={majorInput}
            onChange={(e) => setMajorInput(e.target.value.replace(/[^0-9]/g, ""))}
            onBlur={applyChanges}
            onKeyDown={handleKeyDown}
            className={inputClass}
          />
          <button type="button" onClick={() => decrement("major")} disabled={major === 0} className={`${btnClass} rounded-b-lg`}>
            <ChevronDown size={14} className={major === 0 ? "text-gray-300" : "text-gray-500"} />
          </button>
        </div>
      </div>

      <span className="text-xl font-bold text-gray-300 pb-3">.</span>

      {/* Minor */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-gray-400 uppercase mb-1">Minor</span>
        <div className="flex flex-col items-center bg-gray-50 rounded-lg border border-gray-200">
          <button type="button" onClick={() => increment("minor")} className={`${btnClass} rounded-t-lg`}>
            <ChevronUp size={14} className="text-gray-500" />
          </button>
          <input
            type="text"
            value={minorInput}
            onChange={(e) => setMinorInput(e.target.value.replace(/[^0-9]/g, ""))}
            onBlur={applyChanges}
            onKeyDown={handleKeyDown}
            className={inputClass}
          />
          <button type="button" onClick={() => decrement("minor")} disabled={minor === 0} className={`${btnClass} rounded-b-lg`}>
            <ChevronDown size={14} className={minor === 0 ? "text-gray-300" : "text-gray-500"} />
          </button>
        </div>
      </div>

      <span className="text-xl font-bold text-gray-300 pb-3">.</span>

      {/* Patch */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-gray-400 uppercase mb-1">Patch</span>
        <div className="flex flex-col items-center bg-gray-50 rounded-lg border border-gray-200">
          <button type="button" onClick={() => increment("patch")} className={`${btnClass} rounded-t-lg`}>
            <ChevronUp size={14} className="text-gray-500" />
          </button>
          <input
            type="text"
            value={patchInput}
            onChange={(e) => setPatchInput(e.target.value.replace(/[^0-9]/g, ""))}
            onBlur={applyChanges}
            onKeyDown={handleKeyDown}
            className={inputClass}
          />
          <button type="button" onClick={() => decrement("patch")} disabled={patch === 0} className={`${btnClass} rounded-b-lg`}>
            <ChevronDown size={14} className={patch === 0 ? "text-gray-300" : "text-gray-500"} />
          </button>
        </div>
      </div>
    </div>
  );
}
