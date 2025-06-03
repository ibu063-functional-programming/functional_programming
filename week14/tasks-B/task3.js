// ************ TASK DESCRIPTION ************
//? Task: Debounced Save Draft (Simulated Editor Save)

/*
* You are simulating a rich text editor's autosave feature.
*
* Your task:
* - Implement a function `saveDraft(content)` that simulates saving content to draft storage.
* - Internally debounce the save using a 500ms delay:
*     - If `saveDraft()` is called again before 500ms, cancel the previous save.
*     - Only log "Draft saved: {content}" if no new save occurs within 500ms.
*
* Constraints:
* - Use setTimeout and clearTimeout.
* - Do not log unless the user stops editing.
*
* Simulation Example:
* saveDraft("Once upon");
* setTimeout(() => saveDraft("Once upon a"), 100);
* setTimeout(() => saveDraft("Once upon a time"), 150);
* // Output (after 500ms of inactivity): "Draft saved: Once upon a time"
*/

// TODO

let saveTimer;

function saveDraft(content) {
  if (saveTimer) {
    clearTimeout(saveTimer);
  }

  saveTimer = setTimeout(() => {
    console.log(`Draft saved: ${content}`);
  }, 500);
}

// Below this comment any modification is prohibited.
module.exports = { saveDraft };