const MessageSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
        </div>
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
