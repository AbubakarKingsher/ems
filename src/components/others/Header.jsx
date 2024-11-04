import React from "react";

function Header(props) {
  console.log(props);

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="w-[100%] h-[100px] flex justify-between">
      <div>
        <p className="font-semibold">Hello</p>
        <h2 className="font-bold text-[18px]">{props.data.firstName}👋</h2>
      </div>
      <button
        onClick={logOut}
        className="bg-red-600 px-5 text-[16px] py-2 h-12 rounded"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
