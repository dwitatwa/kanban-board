import ProgressBar from "./ProgressBar";

function Content({ progress }) {
  return (
    <div className="p-[16px] bg-neutral-20 border border-neutral-40 rounded-[4px] w-[298px] mb-[8px]">
      <div className="font-[700] text-neutral-90 text-[14px]">
        Re-designed the zero-g doggie bags. No more spills!
      </div>
      <hr className="border-dashed border-neutral-40 my-[8px]" />
      <div className="flex items-center gap-[26px]">
        <ProgressBar progress={progress} />
        <button>
          <img src="/src/assets/Setting.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Content;
