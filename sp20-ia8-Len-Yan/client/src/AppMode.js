/* AppMode: The enumerated type for AppMode. If we were using TypeScript, we could
use the predefined enum type; see
https://www.typescriptlang.org/docs/handbook/enums.html. Declaring an enumerated
type as a JavaScript object has important limitations (see
https://stackoverflow.com/questions/287903/what-is-the-preferred-syntax-for-defining-enums-in-javascript),
but it will do for our purposes*/

const AppMode = {
    LOGIN: "LoginMode",
    FEED: "FeedMode",
    ROUNDS: "RoundsMode",
    ROUNDS_LOGROUND: "RoundsMode-LogRound",
    ROUNDS_EDITROUND: "RoundsMode-EditRound",
    COURSES: "CoursesMode"
};
/*
const AppMode = {
    LOGIN: "LoginMode",
    Data: "DataMode",
    Data_add: "DataMode-add",
    Data_edit: "DataMode-edit",
    Other: "OtherMode"
};
*/

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;