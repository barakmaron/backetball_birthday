const API_METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete"
};

const routes = [{
  label: "דף הבית",
  location: "/"
}, {
  label: "לבדיקת זמינות",
  location: "/calendar"
}, {
  label: "צור קשר",
  location: "/contact"
}];

const admin_routes = [{
  label: "העלאת תמונות",
  location: "/admin/upload"
}, {
  label: "לוח שנה",
  location: "/admin/calendar"
}];

const days_array_heb = [
  "ראשון",
  "שני",
  "שלישי",
  "רביעי",
  "חמישי",
  "שישי",
  "שבת"
];

const month_array_heb = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר"
];

const contact_info = {
  name: "אוהד ברנט",
  email: "ohadberant@gmail.com",
  phone: "052-2882146",
};

const add_event_form_inputs = [{
  type: "text",
  name: "full_name",
  place_holder: "שם מלא"
}, {
  type: "text",
  name: "phone_number",
  place_holder: "טלפון"
}, {
  type: "email",
  name: "email",
  place_holder: "אימייל"
}];

const login_form = [{
  type: "email",
  name: "email",
  place_holder: "אימייל"
}, {
  type: "password",
  name: "password",
  place_holder: "סיסמה"
}];

const contact_form = [{
  type: "text",
  name: "full_name",
  place_holder: "שם מלא"
}, {
  type: "text",
  name: "phone_number",
  place_holder: "טלפון"
}, {
  type: "email",
  name: "email",
  place_holder: "אימייל"
}];

const user_messages = {
  images_edit_successful: "כיתוב התמונה נערך בהצלחה",
  images_delete_successful: "התמונה נמחקה בהצלחה",
  image_upload_successful: "העלאת התמונה הצליחה",
  add_event_successful: "אירוע זה נוסף ליומן",
  delete_event_successful: "אירוע נמחק בהצלחה",
  send_contact_form: "טופס צור קשר נשלח בהצלחה",
  delete_event_failed: "מחיקת האירוע לא צלחה נסה שוב מאוחר יותר",
  get_event_info_failed: "קיימת שגיאה בקבלת מידע נוסף על האירוע נסה שוב מאוחר יותר",
  add_event_failed: "הוספת האירוע נכשל אנא נסה שוב מאוחר יותר",
  get_events_failed: "לא היה ניתן לקבל את האירועים לחודש זה",
  send_contact_form_failed: "אופס לא הצלחנו לשלוח את הטופס. אנא וודא כי כ השדות מלאים",
  get_images_failed: "לא הצלחנו להביא את התמונות",
  upload_image_failed: "לא היה ניתן לעלות תמונה זאת נסה שוב מאוחר יותר",
  delete_image_failed: "לא הצלחנו למחוק את התמונה נסה שוב מאוחר יותר",
  edit_alt_failed: "לא היה ניתן לשנות את הכיתוב של התמונה נסה שוב מאוחר יותר",
  login_failed: "אנא וודע די השם משתמש והסיסמה תואמים",
  auth_user_failed: "לא היה ניתן לאמת אותך נסה שוב מאוחר יותר",

};

const number_images_per_page = 4;

const Constants = {
  API_METHODS,
  routes,
  admin_routes,
  contact_info,
  days_array_heb,
  month_array_heb,
  add_event_form_inputs,
  login_form, 
  user_messages,
  number_images_per_page,
  contact_form
};

export default Constants;