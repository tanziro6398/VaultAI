import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("vault");

  const handleLogout = () => {
    alert("Logged out successfully!");
    // actual logout logic yahan aayega
  };

  const renderContent = () => {
    switch (activeSection) {
      case "vault":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Vault</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Log out
                </button>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <img src="/profile.png" alt="Profile" className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-4">
              <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-2 mb-4">
                <span>Username</span>
                <span>Password</span>
                <span>Status</span>
              </div>

              <VaultItem
                logo="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"
                name="Gmail"
                email="user12@example.com"
                strength="Strong"
                color="green"
              />
              <VaultItem
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAX_FfM5u0EdC0j5EOWZCT726NG4sI_Sqsg&s"
                name="Facebook"
                email="user12@example.com"
                strength="Moderate"
                color="yellow"
              />
              <VaultItem
                logo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                name="GitHub"
                email="user12@example.com"
                strength="Strong"
                color="green"
              />
            </div>
          </div>
        );
      case "add":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Add Password</h2>
            <div className="bg-white rounded-xl border p-6">
              <div className="mb-4">
                <label className="block font-medium mb-1">Platform Name</label>
                <input type="text" placeholder="e.g. Facebook" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Email/Username</label>
                <input type="email" placeholder="e.g. user@example.com" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save</button>
            </div>
          </div>
        );
      case "generate":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Generate Password</h2>
            <div className="bg-white rounded-xl border p-6 flex flex-col items-start gap-4">
              <p className="font-medium">Generated Password:</p>
              <div className="bg-gray-100 px-4 py-2 rounded w-full">Ab#12xY!9q</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Generate Again</button>
            </div>
          </div>
        );
      case "breach":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Breach Check</h2>
            <div className="bg-white rounded-xl border p-6">
              <p className="mb-4">Enter your email to check for breaches:</p>
              <input type="email" className="w-full border rounded-lg px-4 py-2 mb-4" placeholder="e.g. user@example.com" />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Check Now</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f5f7f9] min-h-screen">
      <div className="w-[80%] h-[80vh] mx-auto my-10 bg-white rounded-xl shadow-2xl flex">
        <div className="w-1/4 p-6 border-r border-gray-200">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center gap-2 text-black text-2xl">
              <img
                src="https://spng.pngfind.com/pngs/s/56-560150_600-x-600-2-shield-check-icon-png.png"
                className="w-8 h-8"
                alt="icon"
              />
              SecureAI Vault
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <SidebarButton label="Vault" icon="/vaul.png" onClick={() => setActiveSection("vault")} />
              <SidebarButton label="Add Password" icon="/add.png" onClick={() => setActiveSection("add")} />
              <SidebarButton label="Generate Password" icon="/gen.png" onClick={() => setActiveSection("generate")} />
              <SidebarButton label="Breach Check" icon="/bleach.png" onClick={() => setActiveSection("breach")} />
            </div>
          </div>
        </div>

        <div className="w-3/4 p-6 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

function SidebarButton({ label, icon, onClick }) {
  return (
    <button
      className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 group w-full text-left"
      onClick={onClick}
    >
      <img src={icon} alt={`${label} Icon`} className="w-6 h-6" />
      <span className="text-lg text-gray-600 group-hover:text-black">{label}</span>
    </button>
  );
}

function VaultItem({ logo, name, email, strength, color }) {
  const colorClass = {
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-600",
  }[color] || "bg-gray-100 text-gray-600";

  return (
    <div className="grid grid-cols-3 items-center mb-4">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-10 h-10" alt={name} />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      <p className="text-xl">••••••••••</p>
      <div className="flex items-center gap-2">
        <span className={`${colorClass} text-sm font-medium px-2 py-1 rounded-full`}>{strength}</span>
        <img src="/vault.png" className="w-10 h-10 cursor-pointer" alt="Copy" />
      </div>
    </div>
  );
}

export default App;
