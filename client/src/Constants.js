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

const user_messages = {
  images_edit_successful: "",
  images_delete_successful: "",
  image_upload_successful: "",
  add_event_successful: "",
  delete_event_successful: ""
};

const Constants = {
  API_METHODS,
  routes,
  admin_routes,
  contact_info,
  days_array_heb,
  month_array_heb,
  add_event_form_inputs,
  login_form, 
  user_messages
};

export default Constants;