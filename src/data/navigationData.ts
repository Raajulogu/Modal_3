import { AutomationItem } from "../types";

export const powerBIReports = [
  { name: 'Risk Assessment', url: 'https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2F%3FnoSignUpCheck%3D1' },
  { name: 'GOP', url: 'https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2heck%3D1' },
  { name: 'Namer Report', url: 'https://app.powerbi.com/singleSignOn?ru%3A%2F%2Fapp.powerbi.com%2heck%3D1' },
  { name: 'SR Modules', url: 'https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fap' },
  { name: 'Schedule Stability', url: 'https://app.powerbi.com/sittps%3A%2F%2Fapp.powerbi.com%2heck%3D1' },
  { name: 'OTD Metrics', url: 'https://app.powerbi.com/singleSignOn?ru=httpsom%2heck%3D1' },
  { name: 'IA Excess', url: 'https://app.powerbi.com/singleSignOjdljkfgdl' }
];

export const shareFolders = 
// [
//   { name: 'POR', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Demand Planning/POR and Changes' },
//   { name: 'Schedule Stability', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/Schedule Stability' },
//   { name: 'OTD & Lead Time', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/OTD & Leadtime' },
//   { name: 'SFDC', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Demand Planning/Sales Funnel' },
//   { name: 'Global Doc', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/Daily Order Cover' },
//   { name: 'PlantDet', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/Plandet' },
//   { name: 'Rev Report', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/Revenue report' },
//   { name: 'Unschedule Order', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Metrics/scheduling_intelligence_tool' },
//   { name: 'Weekly Supply Plan', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Weekly Supply Plan' },
//   { name: 'Work Instruction', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Work Instructions' },
//   { name: 'Profile Tracker', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Profile Tracker' },
//   { name: 'Projects', path: 'file://wtc1501cifs.prod.local/ORGSHARE/TEAMS/ERP Shared Folder/NCR Atleos/Atleos Operations Planning/Global Ops Analytics/Projects' }
// ];
[
  { name: 'POR', path: '/home/rajesh/Ratni/Ratni Adhaar.jpeg' },
  { name: 'DEP POR', path: 'C:\\Vasanthan\\Project\\Doc\\F2' },
  { name: 'Backlog Changes', path: 'C:\\Vasanthan\\Project\\Doc\\F3' },
  { name: 'Schedule Stability', path: 'C:\\Vasanthan\\Project\\Doc\\F4' },
  { name: 'OTD & Lead Time', path: 'C:\\Vasanthan\\Project\\Doc\\F5' },
  { name: 'SFDC', path: 'C:\\Vasanthan\\Project\\Doc\\F6' },
  { name: 'Global Doc', path: 'C:\\Vasanthan\\Project\\Doc\\F7' },
  { name: 'PlantDet', path: 'C:\\Vasanthan\\Project\\Doc\\F8' },
  { name: 'Rev Report', path: 'C:\\Vasanthan\\Project\\Doc\\F9' },
  { name: 'Unschedule Order', path: 'C:\\Vasanthan\\Project\\Doc\\F10' },
  { name: 'Weekly Supply Plan', path: 'C:\\Vasanthan\\Project\\Doc\\F11' },
  { name: 'Work Instruction', path: 'C:\\Vasanthan\\Project\\Doc\\F12' },
  { name: 'Profile Tracker', path: 'C:\\Vasanthan\\Project\\Doc\\F13' },
  { name: 'Projects', path: 'C:\\Vasanthan\\Project\\Doc\\F14' },
  { name: 'EC-Safe Demand', path: 'C:\\Vasanthan\\Project\\Doc\\F15' }
];

export const externalLinks = [
  { name: 'Azure Queries', url: 'http://google.com' },
  { name: 'Azure Synapse Analytics', url: 'http://azure.synape.com' },
  { name: 'NFC Configurator', url: 'http://config.com' },
  { name: 'Merlin', url: 'http://merlin.com' },
  { name: 'ERP', url: 'http://erpwelcome.com' },
  { name: 'OCP', url: 'http://ocpwelcolme.com' },
  { name: 'ERP Request', url: 'http://request.com' },
  { name: 'Merlin Request', url: 'http://merliinerequest.com' },
  { name: 'ADP', url: 'http://adp.com' },
  { name: 'IT Central', url: 'http://itcentral.com' },
  { name: 'NCR University', url: 'http://univeristiy.com' }
];


export const automationItems: AutomationItem[] = [
  { name: 'New Demand', excelPath: 'C:\\Vasanthan\\file1.xlsx', imagePath: '/img1.jpeg' },
  { name: 'NFC', excelPath: 'C:\\Vasanthan\\file2.xlsx', imagePath: '/img2.jpeg' },
  { name: 'Shipments', excelPath: 'C:\\Vasanthan\\file3.xlsx', imagePath: '/img3.jpeg' },
  { name: 'Backlog', excelPath: 'C:\\Vasanthan\\file4.xlsx', imagePath: '/img4.jpeg' },
  { name: 'RFC', excelPath: 'C:\\Vasanthan\\file5.xlsx', imagePath: '/img5.jpeg' },
  { name: 'Feature Demand', excelPath: 'C:\\Vasanthan\\file6.xlsx', imagePath: '/img6.jpeg' },
  { name: 'Sourcing Analytics', excelPath: 'C:\\Vasanthan\\file7.xlsx', imagePath: '/img7.jpeg' },
  { name: 'Generic Mix Analytics', excelPath: 'C:\\Vasanthan\\file8.xlsx', imagePath: '/img8.jpeg' },
  { name: 'Low Usage Analytics', excelPath: 'C:\\Vasanthan\\file9.xlsx', imagePath: '/img9.jpeg' },
  { name: 'Unique Feature Analytics', excelPath: 'C:\\Vasanthan\\file10.xlsx', imagePath: '/img10.jpeg' },
  { name: 'E&O Feature', excelPath: 'C:\\Vasanthan\\file11.xlsx', imagePath: '/img11.jpeg' },
  { name: 'Expedite Features', excelPath: 'C:\\Vasanthan\\file12.xlsx', imagePath: '/img12.jpeg' },
  { name: 'DIS Feature', excelPath: 'C:\\Vasanthan\\file13.xlsx', imagePath: '/img13.jpeg' },
  { name: 'Historical Feature Mix', excelPath: 'C:\\Vasanthan\\file14.xlsx', imagePath: '/img14.jpeg' },
  { name: 'Feature Mix Changes', excelPath: 'C:\\Vasanthan\\file15.xlsx', imagePath: '/img15.jpeg' }
];