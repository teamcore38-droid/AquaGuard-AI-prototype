export const summaryStats = [
  {
    title: "Active Cameras",
    value: "12",
    subtitle: "4 priority zones currently in live view",
    tone: "teal",
  },
  {
    title: "Total Alerts Today",
    value: "18",
    subtitle: "3 new alerts in the last 60 minutes",
    tone: "azure",
  },
  {
    title: "High Risk Alerts",
    value: "4",
    subtitle: "Immediate team response required",
    tone: "red",
  },
  {
    title: "System Status",
    value: "Online",
    subtitle: "98.6% model uptime across active modules",
    tone: "teal",
  },
];

export const moduleStatuses = [
  {
    id: "drowning",
    title: "Drowning Detection",
    status: "Risk Detected",
    note: "Critical activity in Deep Water Area",
    tone: "red",
  },
  {
    id: "alone",
    title: "Child / Elderly Alone",
    status: "Person Alone",
    note: "Observed near River Bank / Edge Area",
    tone: "orange",
  },
  {
    id: "animal",
    title: "Wild Animal Warning",
    status: "No Risk",
    note: "No intrusion detected in current cycle",
    tone: "teal",
  },
  {
    id: "garbage",
    title: "Garbage Detection",
    status: "Clean",
    note: "Public bathing zone remains clear",
    tone: "teal",
  },
  {
    id: "movement",
    title: "Movement & Posture",
    status: "Risky Movement",
    note: "Slips and unstable stance spikes detected",
    tone: "orange",
  },
];

export const alertTrend = [
  { label: "Mon", alerts: 7 },
  { label: "Tue", alerts: 11 },
  { label: "Wed", alerts: 9 },
  { label: "Thu", alerts: 14 },
  { label: "Fri", alerts: 12 },
  { label: "Sat", alerts: 18 },
  { label: "Sun", alerts: 13 },
];

export const recentAlerts = [
  {
    id: "ALT-1048",
    time: "09:42",
    type: "Drowning Risk",
    location: "Camera 02 - Deep Water Area",
    priority: "High",
    status: "New",
  },
  {
    id: "ALT-1047",
    time: "09:18",
    type: "Child Alone",
    location: "Camera 03 - River Bank / Edge Area",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: "ALT-1045",
    time: "08:54",
    type: "Risky Movement",
    location: "Camera 01 - Main Bathing Area",
    priority: "Medium",
    status: "Resolved",
  },
  {
    id: "ALT-1041",
    time: "08:21",
    type: "Garbage Found",
    location: "Camera 04 - Entry forest Area",
    priority: "Low",
    status: "Resolved",
  },
];

export const cameras = [
  {
    id: 1,
    name: "Camera 01",
    location: "Main Bathing Area",
    status: "safe",
    module: "Movement & Posture",
    message: "Movement stable, crowd density normal",
    confidence: 96,
    videoUrl: "/videos/normal%20bathing%20video.mp4",
  },
  {
    id: 2,
    name: "Camera 02",
    location: "Deep Water Area",
    status: "danger",
    module: "Drowning Detection",
    message: "Possible drowning pattern detected",
    confidence: 92,
    videoUrl: "/videos/drowning%20detection%20cam01.mp4",
  },
  {
    id: 3,
    name: "Camera 03",
    location: "River Bank / Edge Area",
    status: "warning",
    module: "Wild Animal & Human Detection",
    message: "Animal movement detected near an exposed visitor zone",
    confidence: 88,
    videoUrl: "/videos/animal%20to%20human%20detected%20risk.mp4",
  },
  {
    id: 4,
    name: "Camera 04",
    location: "Entry and Public Area",
    status: "safe",
    module: "Wild Animal & Human Detection",
    message: "Area clear, animal-to-human threat monitoring active",
    confidence: 94,
    videoUrl: "/videos/human%20detected.mp4",
  },
];

export const alerts = [
  {
    id: "ALT-1048",
    time: "09:42 AM",
    type: "Drowning Risk",
    location: "Deep Water Area",
    camera: "Camera 02",
    priority: "High",
    status: "New",
    description:
      "AquaGuard AI flagged sustained vertical submersion and irregular limb motion for 14 seconds in the deep water zone.",
    recommendedAction:
      "Dispatch nearest rescue team and activate public warning siren for the deep water perimeter.",
    confidence: "92%",
  },
  {
    id: "ALT-1047",
    time: "09:18 AM",
    type: "Child Alone",
    location: "River Bank / Edge Area",
    camera: "Camera 03",
    priority: "Medium",
    status: "In Progress",
    description:
      "A minor-sized subject remained isolated near the edge boundary without nearby guardian detection for 46 seconds.",
    recommendedAction:
      "Notify patrol staff to verify guardian proximity and guide the child back to a supervised zone.",
    confidence: "88%",
  },
  {
    id: "ALT-1046",
    time: "09:02 AM",
    type: "Animal Warning",
    location: "North Forest Access",
    camera: "Camera 05",
    priority: "High",
    status: "Resolved",
    description:
      "The wildlife model detected a medium-sized animal silhouette moving toward the public trail before exiting the area.",
    recommendedAction:
      "Keep ranger team informed and maintain perimeter signage alerts until the next scan cycle confirms clearance.",
    confidence: "85%",
  },
  {
    id: "ALT-1045",
    time: "08:54 AM",
    type: "Risky Movement",
    location: "Main Bathing Area",
    camera: "Camera 01",
    priority: "Medium",
    status: "Resolved",
    description:
      "Posture model detected repeated instability and a slip pattern on the wet stepping surface near the main bathing zone.",
    recommendedAction:
      "Inspect flooring traction and advise visitors through the digital signboard to use handrails.",
    confidence: "90%",
  },
  {
    id: "ALT-1044",
    time: "08:41 AM",
    type: "Garbage Found",
    location: "Entry and Public Area",
    camera: "Camera 04",
    priority: "Low",
    status: "Resolved",
    description:
      "Plastic waste accumulation was detected near the public seating and bag-drop segment of the entry corridor.",
    recommendedAction:
      "Queue housekeeping sweep and update cleanliness score after collection is confirmed.",
    confidence: "94%",
  },
  {
    id: "ALT-1042",
    time: "08:06 AM",
    type: "Elderly Alone",
    location: "South Walkway",
    camera: "Camera 06",
    priority: "Medium",
    status: "In Progress",
    description:
      "An elderly visitor remained stationary with no nearby accompaniment in a wet walkway segment classified as caution-prone.",
    recommendedAction:
      "Send assistance staff to verify well-being and offer guided support back to the public area.",
    confidence: "87%",
  },
];

export const alertsByCategory = [
  { category: "Drowning", total: 12 },
  { category: "Child / Elderly", total: 18 },
  { category: "Animal", total: 6 },
  { category: "Garbage", total: 10 },
  { category: "Movement", total: 14 },
];

export const dailyAlertTrend = [
  { day: "Mon", total: 6 },
  { day: "Tue", total: 8 },
  { day: "Wed", total: 7 },
  { day: "Thu", total: 11 },
  { day: "Fri", total: 10 },
  { day: "Sat", total: 15 },
  { day: "Sun", total: 13 },
];

export const riskDistribution = [
  { name: "High", value: 28, color: "#FF5D73" },
  { name: "Medium", value: 46, color: "#FF9A3E" },
  { name: "Low", value: 26, color: "#2DD4BF" },
];

export const reportSummary = [
  { title: "Total Drowning Alerts", value: "12", tone: "red" },
  { title: "Garbage Detections", value: "10", tone: "azure" },
  { title: "Animal Warnings", value: "6", tone: "orange" },
  { title: "Risky Movement Detections", value: "14", tone: "teal" },
];

export const initialModuleSettings = [
  { id: "drowning", label: "Drowning Detection", enabled: true },
  { id: "alone", label: "Children / Elderly Alone Detection", enabled: true },
  { id: "animal", label: "Wild Animal Warning", enabled: true },
  { id: "garbage", label: "Garbage Detection", enabled: true },
  { id: "movement", label: "Movement & Posture Analysis", enabled: true },
];

export const notificationMethods = ["SMS", "Email", "Siren", "Dashboard"];

export const cameraManagement = [
  {
    id: "CAM-01",
    name: "Camera 01",
    area: "Main Bathing Area",
    health: "Healthy",
    uptime: "99.4%",
  },
  {
    id: "CAM-02",
    name: "Camera 02",
    area: "Deep Water Area",
    health: "Priority Watch",
    uptime: "97.9%",
  },
  {
    id: "CAM-03",
    name: "Camera 03",
    area: "River Bank / Edge Area",
    health: "Healthy",
    uptime: "98.8%",
  },
  {
    id: "CAM-04",
    name: "Camera 04",
    area: "Entry and Public Area",
    health: "Healthy",
    uptime: "99.1%",
  },
];
