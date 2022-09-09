function Header() {
  return (
    <div className="bg-white px-[20px] py-[18px] font-nunito font-bold flex gap-[10px] ">
      <h1 className="text-[18px] text-[#1E1F21]">Product Roadmap</h1>
      <button className="bg-primary-main text-white text-[12px] flex gap-[6.5px] leading-[20px] py-[4px] px-[16px] rounded-[8px]">
        <img src="/src/assets/plus.svg" alt="icon-plus" />
        Add New Group
      </button>
    </div>
  );
}

export default Header;
