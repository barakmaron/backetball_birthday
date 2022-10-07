const API_METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete"
};

const INPUTS_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  TEXT_AREA: "textarea",
  FILE: "file",
  NUMBER: "number",
  EMAIL: "email",
  TEL: "tel"
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
}, {
  label: "המלצות",
  location: "/admin/recommendation"
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
  type: INPUTS_TYPES.TEXT,
  name: "full_name",
  place_holder: "שם מלא"
}, {
  type: INPUTS_TYPES.TEXT,
  name: "phone_number",
  place_holder: "טלפון"
}, {
  type: INPUTS_TYPES.EMAIL,
  name: "email",
  place_holder: "אימייל"
}];

const login_form = [{
  type: INPUTS_TYPES.EMAIL,
  name: "email",
  place_holder: "אימייל"
}, {
  type: INPUTS_TYPES.PASSWORD,
  name: "password",
  place_holder: "סיסמה"
}];

const contact_form = [{
  type: INPUTS_TYPES.TEXT,
  name: "full_name",
  place_holder: "שם מלא"
}, {
  type: INPUTS_TYPES.TEL,
  name: "phone_number",
  place_holder: "טלפון"
}, {
  type: INPUTS_TYPES.EMAIL,
  name: "email",
  place_holder: "אימייל"
}];

const add_recommendation_form = [{
  type: INPUTS_TYPES.FILE,
  name: "image",
  place_holder: "הוסף תמונה"
}, {
  type: INPUTS_TYPES.TEXT,
  name: "Name",
  place_holder: "שם מלא"
}, {
  type: INPUTS_TYPES.NUMBER,
  name: "Rating",
  place_holder: "דירוג"
}, {
  type: INPUTS_TYPES.TEXT_AREA,
  name: "Text",
  place_holder: "המלצה"
}];

const upload_image_form = [{
  type: INPUTS_TYPES.FILE,
  name: "image",
  place_holder: "הוסף תמונה"
}, {
  type: INPUTS_TYPES.TEXT,
  name: "alt",
  place_holder: "כיתוב"
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
  login_failed: "אנא וודא כי השם משתמש והסיסמה תואמים",
  auth_user_failed: "לא היה ניתן לאמת אותך נסה שוב מאוחר יותר",
  delete_recommendation_failed: "לא היה ניתן למחוק את המלצה נסה שוב מאוחר יותר",
  delete_recommendation_successful: "ההמלצה נמחקה בהצלחה",
  update_recommendation_failed: "לא היה ניתן לעדכן את המלצה נסה שוב מאוחר יותר",
  update_recommendation_successful: "ההמלצה עודכה בהצלחה",
  add_recommendation_failed: "לא היה ניתן להוסיף המלצה נסה שוב מאוחר יותר",
  add_recommendation_successful: "המלצה נוספה בהצלחה",
  get_recommendation_failed: "לא היה ניתן לקבל את המלצות נסה שוב מאוחר יותר"
};

const number_images_per_page = 4;
const number_of_recommendation_per_page = 4;

const whatsapp_message = "שלום,%20אני מעוניין ביום הולדת כדורסל";

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
  contact_form,
  whatsapp_message,
  add_recommendation_form,
  INPUTS_TYPES,
  upload_image_form,
  number_of_recommendation_per_page
};

export default Constants;