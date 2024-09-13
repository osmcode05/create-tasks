export default function AddTask({ setInputValue, inputValue, inputRef, handleAddTask, mode }) {
  return (
    <div className="AddDiv">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        placeholder="Add Your Task..."
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <button type="button" id="AddBtn" onClick={handleAddTask}>
        {mode}
      </button>
    </div>
  );
}
