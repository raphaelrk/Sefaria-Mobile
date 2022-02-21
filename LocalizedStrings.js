import {
  Platform
} from 'react-native';
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en: {
    mySheets: "My Sheets",
    history: "History",
    saved: "Saved",
    saved2: "Saved",  // duplicated for different Hebrew translations
    removed: "Removed",
    browse: "BROWSE",
    calendar: "CALENDAR",
    settings: "Settings",
    about: "About",
    feedback: "Feedback",
    dedicatedIOS: "Dedicated in honor of Julia & Henry Koschitzky by their children",
    dedicatedAndroid: "Dedicated in honor of Julia & Henry Koschitzky by their children",
    deleteAccount: "Delete Account",
    deleteAccountMsg: "Deleting your account will permanenetly delete all data associated with your Sefaria account. \n Do you wish to proceed?",
    deleteAccountError: "There was an error trying to complete your request. \n The Sefaria staff have been notified but you can send an email as well.",
    deleteAccountOK: "User account deleted successfully",
    cancel: "Cancel",
    open: "Open",
    tryAgain: "Try Again",
    ok: "OK",
    yes: "Yes",
    no: "No",
    parashah: "Parashah",
    haftara: "Haftara",
    dafYomi: "Daf Yomi",
    tableOfContents: "TABLE OF CONTENTS",
    resources: "RESOURCES",
    noConnectionsMessage: "No connections available.",
    noContent: "(No content)",
    noResultsContaining: 'No results containing',
    search: "Search",
    loading: "Loading...",
    loadingFilters: "Loading Filters...",
    results: "Results", // to be combined with a number, e.g. "32 Results"
    connectToSearchMessage: "Connect to the internet to search.",
    connectToVersionsMessage: "Connect to the internet to read other versions.",
    textLanguage: "Text Language",
    interfaceLanguage: "App Language",
    emailFrequency: "Email Frequency",
    preferredCustom: "Preferred Custom",
    daily: "Daily",
    weekly: "Weekly",
    never: "Never",
    sephardi: "Sephardi",
    ashkenazi: "Ashkenazi",
    bilingual: "Bilingual",
    offlineAccess: "OFFLINE ACCESS",
    downloadInProgress: "Download in progress",
    textsDownloaded: "texts downloaded", // to be combined with a number, e.g. "82 texts downloaded"
    downloadLibrary: "Download Library",
    deleteLibrary: "Delete Library",
    resumeDownload: "Resume Download",
    textUnavailable: "Text Unavailable",
    textUnavailableFromWebMessage: "The text you requested is not currently available from www.sefaria.org.",
    promptOpenOnWebMessage: "This text is not currently available in the mobile app. Would you like to open it on the Web?",
    noInternet: "Internet Connection Unavailable",
    noInternetMessage: "Please check your connection and try again.",
    libraryDownloading: "Library Downloading",
    libraryDownloadingMessage: "The library will download while you have the app open. You can check on the status of the download in the Settings screen.",
    confirmDeleteLibraryMessage: "Are you sure you want to delete the offline library? You will need an Internet connection to use the app.",
    delete: "Delete",
    usingOnlineLibrary: "Using Online Library",
    howToDownloadLibraryMessage: "You can download the library in the future from the Settings screen.",
    welcome: "Welcome",
    downloadLibraryRecommendedMessage: "We recommend downloading the offline library for a better experience. Open settings to download. Otherwise you will need an Internet connection to use the app.",
    openSettings: "Open Settings",
    download: "Download",
    downloading: "Downloading",
    notNow: "Not Now",
    downloadPaused: "Download Paused",
    howToResumeDownloadMessage: "You can resume the download in the Settings screen.",
    downloadError: "Download Error",
    downloadErrorMessage: "Unfortunately we encountered an error downloading the library. Click 'Check for Updates' to repair",
    failedToLoadText: "(Failed to load text)",
    pause: "Pause",
    updateLater: "Update Later",
    howToUpdateLibraryMessage: "You can update your library in the future from the Settings screen.",
    updateLibrary: "Library Updates",
    newBooksAvailable: "new book(s)", // to be combined with a number, e.g. "2 new books"
    updatesAvailableMessage: "text update(s).\nWould you like to download now?", // to be combined with a number, e.g. "14 updates..."
    libraryUpToDate: "Library Up To Date",
    libraryUpToDateMessage: "You have the most current version of the Sefaria Library for "+Platform.OS,
    checkForUpdates: "Check for Updates",
    downloadUpdates: "Download Updates",
    appVersion: "App Version",
    back: "Back",
    clearAll: "Clear All",
    apply: "Apply",
    filter: "FILTER",
    sortBy: "SORT BY",
    chronological: "Chronological",
    relevance: "Relevance",
    exactSearch: "EXACT SEARCH",
    on: "On",
    off: "Off",
    onFem: "On",
    offFem: "Off",
    filterByText: "FILTER BY TEXT",
    english: "English",
    hebrew: "Hebrew",
    yiddish: "Yiddish",
    finnish: "Finnish",
    portuguese: "Portuguese",
    spanish: "Spanish",
    french: "French",
    german: "German",
    arabic: "Arabic",
    italian: "Italian",
    polish: "Polish",
    russian: "Russian",
    esperanto: "Esperanto",
    farsi: "Farsi",
    versions: "Versions",
    version: "Version",
    translations: "Translations",
    aboutThisText: "About This Text",
    currentHebrewVersion: "Current Hebrew Version",
    currentEnglishVersion: "Current English Version",
    read: "READ",
    compare: "COMPARE",
    languageYo: "Language",  // WARNING: dont call any keys `language`. apparently that's reserved by LocalizedStrings
    layout: "Layout",
    fontSize: "Font Size",
    aliyot: "Aliyot",
    vocalization: "Vocalization",
    color: "Color",
    sheets: "Sheets",
    topics: "Topics",
    sources: "Sources",
    supportSefaria: "SUPPORT SEFARIA",
    donate: "Donate",
    recentSearches: "RECENT SEARCHES",
    remove: "Remove",
    alreadyDownloaded: "Already Downloaded",
    areIncludedIn: "These texts are included in",
    areYouSureDeletePackage: "Are you sure you want to remove this package?",
    areYouSureDeleteDownloadProgress: "Are you sure you want to cancel the downloads in progress?",
    checking: "Checking...",
    copy: "Copy",
    share: "Share",
    reportError: "Report Error",
    viewOnSite: "View on Site",
    bilingualLayout: "Bilingual Layout",
    wantToSync: "Want to sync your reading history?",
    logIn: "Log in",
    saveTexts: "Save texts",
    syncYourReading: "Sync your reading history",
    readYourSheets: "Read your sheets on mobile",
    getUpdates: "Get updates",
    system: "System",
    termsAndPrivacy: "Terms & Privacy",
    alreadyHaveAnAccount: "Already have an account?",
    views: "Views",
    byClickingSignUp: "By clicking 'sign up', you agree to our",
    termsOfUseAndPrivacyPolicy: "Terms of Use and Privacy Policy",
    more: "More",
    account: "Account",
    log_in: "Log In",
    sign_up: "Sign Up",
    dontHaveAnAccount: "Don’t have an account?",
    createAnAccount: "Create an Account.",
    forgotPassword: "Forgot your password?",
    email: "Email Address",
    password: "Password",
    first_name: "First Name",
    last_name: "Last Name",
    loginSuccessful: "Login successful",
    logout: "Log Out",
    define: "Define",
    doubleDownload: "Another Download is in Progress",
    wifiOnly: "Wi-Fi Only",
    mobileNetwork: "Mobile Network",
    downloadNetworkSetting: "Downloader Network Setting",
    of: "of",
    connecting: "Connecting",
    thisSourceIsConnectedTo: "This source is connected to ",
    thisTopicIsConnectedTo: "This topic is connected to ",
    by: "by",
    resourcesFailedToLoad: "Resources failed to load. Tap to retry.",
    groggerActive: "Grogger",
    readThePortion: "Read the Portion",
    trendingTopics: "Trending Topics",
    vowels: "Vowels",
    readingHistory: "Reading History",
    turningThisFeatureOff: "Turning this feature off will permanently delete your reading history.",
    readingHistoryIsCurrentlyDisabled: "Reading history is currently disabled. You can re-enable this feature in your",
  },
  he: {
    mySheets: "דפי המקורות שלי",
    history: "היסטוריה",
    saved: "שמורים",
    saved2: "נשמר בהצלחה",
    removed: "הוסר מהשמורים",
    browse: "טקסטים",
    calendar: "לוח יומי",
    settings: "הגדרות",
    about: "אודות",
    feedback: "משוב",
    dedicatedIOS: "נתרם לכבודם של ג'וליה והנרי קושיצקי על ידי ילדיהם",
    dedicatedAndroid: "נתרם לכבודם של ג'וליה והנרי קושיצקי על ידי ילדיהם",
    deleteAccount: "מחיקת חשבון משתמש",
    deleteAccountMsg: "מחיקת חשבון המשתמש תמחק את כל המידע שנמצא בחשבון וזוהי פעולה בלתי הפיכה. \n האם תרצו להמשיך?",
    deleteAccountError: "ארעה שגיאה בעת מחיקת החשבון \n צוות ספריא עודכן, אך אם תרצו תוכלו לשלוח מייל בנוסף.",
    deleteAccountOK: "חשבון המשתמש נמחק בהצלחה",
    cancel: "בטל",
    open: "פתח",
    tryAgain: "נסה שוב",
    ok: "אישור",
    yes: "כן",
    no: "לא",
    parashah: "פרשה",
    haftara: "הפטרה",
    dafYomi: "דף יומי",
    tableOfContents: "תוכן העניינים",
    resources: "קישורים וכלים",
    noConnectionsMessage: "אין קישורים",
    noContent: "(אין טקסט)",
    noResultsContaining: "אין תוצאות בשביל",
    search: "חיפוש",
    loading: "טוען...",
    loadingFilters: "טוען מסננים...",
    results: "תוצאות", // to be combined with a number, e.g. "32 Results"
    connectToSearchMessage: "התחבר לאינטרנט כדי לבצע חיפוש",
    connectToVersionsMessage: "התחבר לאינטרנט כדי לקרוא עוד גרסאות",
    textLanguage: "שפת טקסט",
    interfaceLanguage: "שפת ממשק",
    emailFrequency: "תדירות שליחת אימייל (מקסימלית)",
    preferredCustom: "מנהג מועדף (להפטרות)",
    daily: "יומית",
    weekly: "שבועית",
    never: "לעולם לא",
    sephardi: "עדת המזרח",
    ashkenazi: "אשכנז",
    english: "אנגלית",
    hebrew: "עברית",
    sheets: "דפי מקורות",
    topics: "נושאים",
    sources: "מקורות",
    bilingual: "דו-לשוני",
    offlineAccess: "מצב בלתי מקוון",
    downloadInProgress: "הורדה מתבצעת",
    textsDownloaded: "טקסטים הורדו בהצלחה", // to be combined with a number, e.g. "82 texts downloaded"
    downloadLibrary: "הורד את הספריה",
    deleteLibrary: "מחק את הספריה",
    resumeDownload: "המשך הורדה",
    textUnavailable: "טקסט לא זמין",
    textUnavailableFromWebMessage: "הטקסט אותו ביקשת אינו זמין כרגע מwww.sefaria.org.",
    promptOpenOnWebMessage: "הטקסט הזה אינו זמין כרגע באפליקציה, האם תרצה לפתוח אותו באתר האינטרנט?",
    noInternet: "חיבור רשת אינו זמין",
    noInternetMessage: "אנא בדוק את מצב החיבור שלך ונסה שוב",
    libraryDownloading: "קבצי הספריה בהורדה",
    libraryDownloadingMessage: "קבצי הספריה יורדו מהרשת בזמן שהאפליקציה פתוחה. ניתן לבדוק את התקדמות ההורדה במסך ההגדרות.",
    confirmDeleteLibraryMessage: "האם ברצונך למחוק את הספריה מזכרון המכשיר? יידרש חיבור רשת פעיל בכדי להשתמש באפליקציה.",
    delete: "מחיקה",
    usingOnlineLibrary: "האפליקציה במצב מקוון בלבד",
    howToDownloadLibraryMessage: "תוכל להוריד את הספריה הבלתי מקוונת בכל עת ממסך ההגדרות.",
    welcome: "ברוכים הבאים",
    downloadLibraryRecommendedMessage: "אנו ממליצים על הורדה ושימוש בקבצי הספריה הבלתי מקוונת. פחת הגדרות להוריד. אחרת יידרש חיבור רשת פעיל בכדי להשתמש באפליקציה.",
    openSettings: "פתח הגדרות",
    download: "הורד",
    downloading: "מוריד",
    notNow: "לא כעת",
    downloadPaused: "הורדה נעצרה",
    howToResumeDownloadMessage: "ניתן לחדש את ההורדה ממסך ההגדרות.",
    downloadError: "שגיאה בהורדה",
    downloadErrorMessage: 'לצערנו ארעה תקלה בזמן ההורדה. נא ללחוץ "בדוק עדכונים קיימים" לתיקון',
    failedToLoadText: "(תקלה בטעינת טקסט)",
    pause: "עצור",
    updateLater: "עדכן אחר כך",
    howToUpdateLibraryMessage: "תוכל לעדכן את הספריה הבלתי מקוונת בעתיד ממסך ההגדרות",
    updateLibrary: "עדכונים לספריה הבלתי מקוונת",
    newBooksAvailable: "ספר(ים) חדש(ים)", // to be combined with a number, e.g. "2 new books"
    updatesAvailableMessage: "עדכונ(ים) לטקסט(ים).\nהאם תרצה להוריד כעת?", // to be combined with a number, e.g. "14 texts have..."
    libraryUpToDate: "הספריה מעודכנת",
    libraryUpToDateMessage: "הגרסה העדכנית ביותר של הספרייה הבלתי מקוונת ל-"+Platform.OS+" מעודכנת במכשירך",
    checkForUpdates: "בדוק עדכונים קיימים",
    downloadUpdates: "הורד עדכונים",
    appVersion: "גרסת האפליקציה",
    back: "חזור",
    clearAll: "נקה הכל",
    apply: "החל",
    filter: "סינון",
    sortBy: "מיון לפי",
    chronological: "כרונולוגי",
    relevance: "רלוונטיות",
    exactSearch: "חיפוש מדויק",
    on: "פעיל",
    off: "כבוי",
    onFem: "פעילה",
    offFem: "כבויה",
    filterByText: "סינון לפי טקסט",
    yiddish: "יידיש",
    finnish: "פינית",
    portuguese: "פורטוגזית",
    spanish: "ספרדית",
    french: "צרפתית",
    german: "גרמנית",
    arabic: "ערבית",
    italian: "איטלקית",
    polish: "פולנית",
    russian: "רוסית",
    esperanto: "אספרנטו",
    farsi: "פרסי",
    versions: "גרסאות",
    version: "גרסה",
    translations: "תרגומים",
    aboutThisText: "אודות ספר זה",
    currentHebrewVersion: "גרסה עברית נוכחית",
    currentEnglishVersion: "גרסה אנגלית נוכחית",
    read: "קרא",
    compare: "השווה",
    languageYo: "שפה",
    layout: "עימוד דו לשוני",
    fontSize: "גודל גופן",
    aliyot: "עליות לתורה",
    vocalization: "טעמים וניקוד",
    color: "צבע",
    supportSefaria: "תמכו בספריא",
    donate: "תרומה",
    recentSearches: "חיפושים אחרונים",
    remove: "הסר",
    alreadyDownloaded: "אין צורך להוריד",
    areIncludedIn: "הטקסטים הללו כבר כלולים באוסף",
    areYouSureDeletePackage: "האם אתם בטוחים שברצונכם להסיר את האוסף?",
    areYouSureDeleteDownloadProgress: "האם אתם בטוחים שברצונכם לבטל את כל ההורדות בתהליך?",
    checking: "בודק...",
    copy: "העתק",
    share: "שתף",
    reportError: "דווח שגיאה",
    viewOnSite: "לצפות באתר",
    bilingualLayout: "עימוד דו לשוני",
    wantToSync: "האם תרצו לסנכרן את היסטורית הקריאה שלכם?",
    logIn: "התחברו לחשבון",
    saveTexts: "שמירת טקסטים",
    syncYourReading: "סנכרון היסטוריה קריאה",
    readYourSheets: "צפייה בדפי המקורות באפליקציה",
    getUpdates: "קבלת עדכוני חדשות מספריא",
    system: "מערכת",
    termsAndPrivacy: "תנאים ופרטיות",
    alreadyHaveAnAccount: "כבר יש לכם חשבון?",
    views: "צפיות",
    byClickingSignUp: "בלחיצה על 'יצירת חשבון' הנכם מסכימים ל",
    termsOfUseAndPrivacyPolicy: "תנאי שימוש ופוליסת פרטיות",
    more: "עוד",
    account: "חשבון משתמש",
    log_in: "כניסה לחשבון",
    sign_up: "יצירת חשבון",
    dontHaveAnAccount: "חדש?",
    createAnAccount: "צור חשבון משתמש",
    forgotPassword: "שכחתי את הסיסמא שלי",
    email: "כתובת אימייל",
    password: "סיסמא",
    first_name: "שם פרטי",
    last_name: "שם משפחה",
    loginSuccessful: "התחברות בוצעה בהצלחה",
    logout: "ניתוק מהחשבון",
    define: "הגדרה",
    doubleDownload: "מוריד אוסף אחר, נא להמתין",
    wifiOnly: "Wi-Fi בלבד",
    mobileNetwork: "רשת סלולרית",
    downloadNetworkSetting: "הגדרות רשת עבור הורדות",
    of: "מתוך",
    connecting: "מתחבר",
    thisSourceIsConnectedTo: "מקור הזה קשור ל-",
    thisTopicIsConnectedTo: "נושא הזה קשור ל-",
    by: "על ידי",
    resourcesFailedToLoad: "שגיאה בטעינת המקורות. לחצו לניסיון נוסף.",
    groggerActive: "רעשן",
    readThePortion: "קראו את הפרשה",
    trendingTopics: "נושאים נפוצים",
    vowels: "ניקוד",
    readingHistory: "היסטורית קריאה",
    turningThisFeatureOff: "כיבוי אפשרות זו תמחק לצמיתות את היסטורית הקריאה שלך.",
    readingHistoryIsCurrentlyDisabled: "היסטורית קריאה כבויה כרגע. ניתן להפעילה מחדש במסך",
  }
});

export default strings;
