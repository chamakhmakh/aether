const StatusBar = () => {
  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-40 mix-blend-difference pointer-events-none">
      <div className="w-px h-24 bg-white/20" />
      <div className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 tracking-widest vertical-rl rotate-180">
        SYSTEM_READY
      </div>
      <div className="w-px h-24 bg-white/20" />
    </div>
  );
};

export default StatusBar;
