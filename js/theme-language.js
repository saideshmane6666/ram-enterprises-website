// DARK MODE TOGGLE
// ===========================

// Get DOM elements
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const langOptions = document.querySelectorAll('.lang-option');

// Initialize dark mode
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

// Toggle dark mode
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// LANGUAGE SWITCHER
// ===========================

// Translation dictionary with comprehensive content
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About Us': 'About Us',
        'Services': 'Services',
        'Contact': 'Contact',
        // Header & Hero
        'Ram Enterprises': 'Ram Enterprises',
        'Secure Your Life, Health & Vehicles': 'Secure Your Life, Health & Vehicles',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions': 'Your Trusted Partner for Insurance & Smart Vehicle Solutions',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions since 2010. Life, Health, Motor Insurance, FASTag, and GPS Tracking services.': 'Your Trusted Partner for Insurance & Smart Vehicle Solutions since 2010. Life, Health, Motor Insurance, FASTag, and GPS Tracking services.',
        'Serving Since': 'Serving Since',
        '✓ Serving Since': '✓ Serving Since',
        '2010': '2010',
        'Happy Clients': 'Happy Clients',
        '✓': '✓',
        '5000+': '5000+',
        'Get a Quote': 'Get a Quote',
        'Call Now: 9075043523': 'Call Now: 9075043523',
        'Call Now': 'Call Now',
        '9075043523': '9075043523',
        // Services Section
        'Our Services': 'Our Services',
        'Life Insurance': 'Life Insurance',
        'Financial protection for your family\'s future': 'Financial protection for your family\'s future',
        'Health Insurance': 'Health Insurance',
        'Comprehensive health coverage for peace of mind': 'Comprehensive health coverage for peace of mind',
        'Motor Insurance': 'Motor Insurance',
        'Complete vehicle protection with quick issuance': 'Complete vehicle protection with quick issuance',
        'FASTag Services': 'FASTag Services',
        'Fast toll payments with no manual delays': 'Fast toll payments with no manual delays',
        'GPS Tracking': 'GPS Tracking',
        'Real-time vehicle tracking and anti-theft alerts': 'Real-time vehicle tracking and anti-theft alerts',
        'View All Services': 'View All Services',
        // Quote Form
        'Get Your Free Quote': 'Get Your Free Quote',
        'Ram Enterprises - Full Name': 'Ram Enterprises - Full Name',
        'Ram Enterprises - Phone Number': 'Ram Enterprises - Phone Number',
        'Ram Enterprises - Email Address': 'Ram Enterprises - Email Address',
        'Ram Enterprises - Subject': 'Ram Enterprises - Subject',
        'Ram Enterprises - Service Interested In': 'Ram Enterprises - Service Interested In',
        'Ram Enterprises - Message': 'Ram Enterprises - Message',
        'Ram Enterprises - Service Required': 'Ram Enterprises - Service Required',
        'Select a Service': 'Select a Service',
        '-- Select a Service --': '-- Select a Service --',
        '-- Select a Service --Life InsuranceHealth InsuranceMotor InsuranceFASTagGPS TrackingGeneral Inquiry': '-- Select a Service --',
        'Tell us about your requirement...': 'Tell us about your requirement...',
        'Please provide details about your inquiry...': 'Please provide details about your inquiry...',
        'Get Quote': 'Get Quote',
        'Chat on WhatsApp': 'Chat on WhatsApp',
        '💬 Chat on WhatsApp': '💬 Chat on WhatsApp',
        // Why Choose Us
        'Why Choose Ram Enterprises?': 'Why Choose Ram Enterprises?',
        'Since 2010': 'Since 2010',
        'Over a decade of trusted service and expertise': 'Over a decade of trusted service and expertise',
        '5000+ Clients': '5000+ Clients',
        'Thousands of satisfied customers across India': 'Thousands of satisfied customers across India',
        'Verified Partners': 'Verified Partners',
        'Associated with top insurance companies': 'Associated with top insurance companies',
        'Expert Advisors': 'Expert Advisors',
        'Professional guidance from experienced consultants': 'Professional guidance from experienced consultants',
        'Extended Hours': 'Extended Hours',
        'Available 9 AM to 9 PM for your convenience': 'Available 9 AM to 9 PM for your convenience',
        'Online Support': 'Online Support',
        'Quick response via Phone, Email & WhatsApp': 'Quick response via Phone, Email & WhatsApp',
        // Testimonials & CTA
        'What Our Clients Say': 'What Our Clients Say',
        'Ready to Protect Your Future?': 'Ready to Protect Your Future?',
        'Contact us today for a personalized insurance solution': 'Contact us today for a personalized insurance solution',
        // Process
        'Our Simple Process': 'Our Simple Process',
        'Inquiry': 'Inquiry',
        'Contact us with your requirements': 'Contact us with your requirements',
        'Consultation': 'Consultation',
        'Discuss your needs with our advisor': 'Discuss your needs with our advisor',
        'Proposal': 'Proposal',
        'Receive customized quotation': 'Receive customized quotation',
        'Enrollment': 'Enrollment',
        'Complete documentation and enrollment': 'Complete documentation and enrollment',
        // Contact Page
        'Contact Us': 'Contact Us',
        'We\'d love to hear from you. Get in touch with us today!': 'We\'d love to hear from you. Get in touch with us today!',
        'Comprehensive Insurance & Vehicle Solutions': 'Comprehensive Insurance & Vehicle Solutions',
        'We offer a comprehensive range of insurance and vehicle-related services designed to protect your life, health, and assets.': 'We offer a comprehensive range of insurance and vehicle-related services designed to protect your life, health, and assets.',
        'Send us a Message': 'Send us a Message',
        '📍 Address': 'Address',
        'Address': 'Address',
        'Baramati, Pune': 'Baramati, Pune',
        'Maharashtra 413102': 'Maharashtra 413102',
        'India': 'India',
        '📞 Phone': 'Phone',
        'Phone': 'Phone',
        'Call us for quick assistance': 'Call us for quick assistance',
        '📧 Email': 'Email',
        'Email': 'Email',
        'Reach out via email': 'Reach out via email',
        'ramdeshmuk30@gmail.com': 'ramdeshmuk30@gmail.com',
        '⏰ Working Hours': 'Working Hours',
        'Working Hours': 'Working Hours',
        '9:00 AM – 9:00 PM': '9:00 AM – 9:00 PM',
        'Monday to Sunday': 'Monday to Sunday',
        'Find Us on Map': 'Find Us on Map',
        'Quick Contact Options': 'Quick Contact Options',
        '📞': '📞',
        '💬': '💬',
        '📧': '📧',
        'Call Now': 'Call Now',
        'WhatsApp': 'WhatsApp',
        'Message Now': 'Message Now',
        // Services Page - Detailed
        'Secure your family\'s financial future with our comprehensive life insurance plans. Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'Secure your family\'s financial future with our comprehensive life insurance plans. Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.',
        'Secure your family\'s financial future with our comprehensive life insurance plans.': 'Secure your family\'s financial future with our comprehensive life insurance plans.',
        'Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.',
        'Key Benefits:': 'Key Benefits:',
        'Financial protection for your family members': 'Financial protection for your family members',
        'Long-term savings and investment opportunities': 'Long-term savings and investment opportunities',
        'Competitive premiums with flexible payment options': 'Competitive premiums with flexible payment options',
        'Quick claim settlement and support': 'Quick claim settlement and support',
        'Customizable coverage based on your needs': 'Customizable coverage based on your needs',
        'Tax benefits under Section 80C': 'Tax benefits under Section 80C',
        'Apply Now': 'Apply Now',
        'Our Trusted Insurance Partners': 'Our Trusted Insurance Partners',
        'We are associated with leading insurance companies in India': 'We are associated with leading insurance companies in India',
        'Life & Health Insurance Partners': 'Life & Health Insurance Partners',
        'General Insurance Partners': 'General Insurance Partners',
        'Star Health Insurance': 'Star Health Insurance',
        'Tata AIA Life Insurance': 'Tata AIA Life Insurance',
        'Care Health Insurance': 'Care Health Insurance',
        'ACKO General Insurance Ltd': 'ACKO General Insurance Ltd',
        'Bajaj Allianz General Insurance': 'Bajaj Allianz General Insurance',
        'Cholamandalam MS General Insurance': 'Cholamandalam MS General Insurance',
        'Future Generali India Insurance': 'Future Generali India Insurance',
        'Go Digit General Insurance': 'Go Digit General Insurance',
        'HDFC ERGO General Insurance': 'HDFC ERGO General Insurance',
        'ICICI Lombard General Insurance': 'ICICI Lombard General Insurance',
        'IFFCO Tokio General Insurance': 'IFFCO Tokio General Insurance',
        'Kotak Mahindra General Insurance': 'Kotak Mahindra General Insurance',
        'Liberty General Insurance': 'Liberty General Insurance',
        'Magma HDI General Insurance': 'Magma HDI General Insurance',
        'National Insurance Co. Ltd': 'National Insurance Co. Ltd',
        'Protect yourself and your family with our comprehensive health insurance plans offering cashless hospitalization and complete medical coverage.': 'Protect yourself and your family with our comprehensive health insurance plans offering cashless hospitalization and complete medical coverage.',
        'Cashless hospitalization at network hospitals': 'Cashless hospitalization at network hospitals',
        'Individual and family coverage options': 'Individual and family coverage options',
        'Comprehensive coverage for critical illnesses': 'Comprehensive coverage for critical illnesses',
        'Pre and post-hospitalization expenses covered': 'Pre and post-hospitalization expenses covered',
        'Affordable premium plans': 'Affordable premium plans',
        '24/7 customer support and claim assistance': '24/7 customer support and claim assistance',
        // About Page
        'About Ram Enterprises': 'About Ram Enterprises',
        'Who We Are': 'Who We Are',
        'Ram Enterprises is a leading insurance and vehicle solutions provider based in Baramati, Pune. With a strong commitment to excellence and customer satisfaction, we have served over 5,000 happy clients since our establishment in 2010.': 'Ram Enterprises is a leading insurance and vehicle solutions provider based in Baramati, Pune. With a strong commitment to excellence and customer satisfaction, we have served over 5,000 happy clients since our establishment in 2010.',
        'Founded by Ram Deshmukh, a Financial Insurance Advisor with deep expertise in the insurance sector, Ram Enterprises has become a trusted name in providing comprehensive insurance solutions and advanced vehicle tracking services.': 'Founded by Ram Deshmukh, a Financial Insurance Advisor with deep expertise in the insurance sector, Ram Enterprises has become a trusted name in providing comprehensive insurance solutions and advanced vehicle tracking services.',
        'Meet Our Founder': 'Meet Our Founder',
        'Ram Deshmukh – Financial Insurance Advisor': 'Ram Deshmukh – Financial Insurance Advisor',
        'With over 14 years of experience in the financial and insurance sector, Ram Deshmukh has dedicated his career to helping individuals and families protect their financial future.': 'With over 14 years of experience in the financial and insurance sector, Ram Deshmukh has dedicated his career to helping individuals and families protect their financial future.',
        'His expertise spans across life insurance, health insurance, motor insurance, and emerging vehicle technology solutions.': 'His expertise spans across life insurance, health insurance, motor insurance, and emerging vehicle technology solutions.',
        'Insurance is not just a product; it\'s peace of mind for your loved ones.': 'Insurance is not just a product; it\'s peace of mind for your loved ones.',
        'This belief has driven him to build Ram Enterprises into a trusted advisory firm that prioritizes client needs above all else.': 'This belief has driven him to build Ram Enterprises into a trusted advisory firm that prioritizes client needs above all else.',
        'Years of Experience': 'Years of Experience',
        'Since Established': 'Since Established',
        '14+': '14+',
        'Happy Clients': 'Happy Clients',
        // Footer & Legal
        'Privacy Policy': 'Privacy Policy',
        'Terms & Conditions': 'Terms & Conditions',
        'All rights reserved': 'All rights reserved',
        'English': 'English',
        'हिंदी (Hindi)': 'हिंदी (Hindi)',
        'मराठी (Marathi)': 'मराठी (Marathi)',
        'EN ▼': 'EN ▼',
        'Toggle Dark Mode': 'Toggle Dark Mode',
        'Select Language': 'Select Language'
    },
    hi: {
        // Navigation
        'Home': 'होम',
        'About Us': 'हमारे बारे में',
        'Services': 'सेवाएं',
        'Contact': 'संपर्क',
        // Header & Hero
        'Ram Enterprises': 'राम एंटरप्राइजेज',
        'Secure Your Life, Health & Vehicles': 'अपनी जीवन, स्वास्थ्य और वाहन सुरक्षित करें',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions': 'बीमा और स्मार्ट वाहन समाधान के लिए आपका विश्वस्त भागीदार',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions since 2010. Life, Health, Motor Insurance, FASTag, and GPS Tracking services.': '2010 से बीमा और स्मार्ट वाहन समाधान के लिए आपका विश्वस्त भागीदार। जीवन, स्वास्थ्य, मोटर बीमा, FASTag और GPS ट्रैकिंग सेवाएं।',
        'Serving Since': 'सेवा कर रहे हैं से',
        '✓ Serving Since': '✓ सेवा कर रहे हैं से',
        '2010': '2010',
        'Happy Clients': 'खुश ग्राहक',
        '✓': '✓',
        '5000+': '5000+',
        'Get a Quote': 'उद्धरण प्राप्त करें',
        'Call Now: 9075043523': 'अभी कॉल करें: 9075043523',
        'Call Now': 'अभी कॉल करें',
        '9075043523': '9075043523',
        // Services Section
        'Our Services': 'हमारी सेवाएं',
        'Life Insurance': 'जीवन बीमा',
        'Financial protection for your family\'s future': 'आपके परिवार के भविष्य के लिए वित्तीय सुरक्षा',
        'Health Insurance': 'स्वास्थ्य बीमा',
        'Comprehensive health coverage for peace of mind': 'मानसिक शांति के लिए व्यापक स्वास्थ्य कवरेज',
        'Motor Insurance': 'मोटर बीमा',
        'Complete vehicle protection with quick issuance': 'तेजी से जारी करने के साथ पूर्ण वाहन सुरक्षा',
        'FASTag Services': 'FASTag सेवाएं',
        'Fast toll payments with no manual delays': 'बिना मैनुअल देरी के तेजी से टोल भुगतान',
        'GPS Tracking': 'GPS ट्रैकिंग',
        'Real-time vehicle tracking and anti-theft alerts': 'रीयल-टाइम वाहन ट्रैकिंग और चोरी-रोधी सतर्कता',
        'View All Services': 'सभी सेवाएं देखें',
        // Quote Form
        'Get Your Free Quote': 'अपना निःशुल्क उद्धरण प्राप्त करें',
        'Ram Enterprises - Full Name': 'राम एंटरप्राइजेज - पूरा नाम',
        'Ram Enterprises - Phone Number': 'राम एंटरप्राइजेज - फोन नंबर',
        'Ram Enterprises - Email Address': 'राम एंटरप्राइजेज - ईमेल पता',
        'Ram Enterprises - Subject': 'राम एंटरप्राइजेज - विषय',
        'Ram Enterprises - Service Interested In': 'राम एंटरप्राइजेज - रुचि की सेवा',
        'Ram Enterprises - Message': 'राम एंटरप्राइजेज - संदेश',
        'Ram Enterprises - Service Required': 'राम एंटरप्राइजेज - आवश्यक सेवा',
        'Select a Service': 'एक सेवा चुनें',
        '-- Select a Service --': '-- एक सेवा चुनें --',
        '-- Select a Service --Life InsuranceHealth InsuranceMotor InsuranceFASTagGPS TrackingGeneral Inquiry': '-- एक सेवा चुनें --',
        'Tell us about your requirement...': 'अपनी आवश्यकता के बारे में हमें बताएं...',
        'Please provide details about your inquiry...': 'कृपया अपनी पूछताछ के बारे में विवरण प्रदान करें...',
        'Get Quote': 'उद्धरण प्राप्त करें',
        'Chat on WhatsApp': 'व्हाट्सएप पर चैट करें',
        '💬 Chat on WhatsApp': '💬 व्हाट्सएप पर चैट करें',
        // Why Choose Us
        'Why Choose Ram Enterprises?': 'राम एंटरप्राइजेज को क्यों चुनें?',
        'Since 2010': '2010 से',
        'Over a decade of trusted service and expertise': 'विश्वसनीय सेवा और दक्षता का एक दशक से अधिक',
        '5000+ Clients': '5000+ ग्राहक',
        'Thousands of satisfied customers across India': 'भारत भर में हजारों संतुष्ट ग्राहक',
        'Verified Partners': 'सत्यापित भागीदार',
        'Associated with top insurance companies': 'शीर्ष बीमा कंपनियों के साथ जुड़े हुए',
        'Expert Advisors': 'विशेषज्ञ सलाहकार',
        'Professional guidance from experienced consultants': 'अनुभवी सलाहकारों से व्यावसायिक मार्गदर्शन',
        'Extended Hours': 'विस्तारित समय',
        'Available 9 AM to 9 PM for your convenience': 'आपकी सुविधा के लिए सुबह 9 बजे से रात 9 बजे तक उपलब्ध',
        'Online Support': 'ऑनलाइन समर्थन',
        'Quick response via Phone, Email & WhatsApp': 'फोन, ईमेल और व्हाट्सएप के माध्यम से तेजी से प्रतिक्रिया',
        // Testimonials & CTA
        'What Our Clients Say': 'हमारे ग्राहक क्या कहते हैं',
        'Ready to Protect Your Future?': 'अपने भविष्य की सुरक्षा के लिए तैयार?',
        'Contact us today for a personalized insurance solution': 'व्यक्तिगत बीमा समाधान के लिए आज ही हमसे संपर्क करें',
        // Process
        'Our Simple Process': 'हमारी सरल प्रक्रिया',
        'Inquiry': 'पूछताछ',
        'Contact us with your requirements': 'अपनी आवश्यकताओं के साथ हमसे संपर्क करें',
        'Consultation': 'परामर्श',
        'Discuss your needs with our advisor': 'अपनी जरूरतों पर हमारे सलाहकार के साथ चर्चा करें',
        'Proposal': 'प्रस्ताव',
        'Receive customized quotation': 'अनुकूलित उद्धरण प्राप्त करें',
        'Enrollment': 'नामांकन',
        'Complete documentation and enrollment': 'पूर्ण दस्तावेज और नामांकन',
        // Contact Page
        'Contact Us': 'हमसे संपर्क करें',
        'We\'d love to hear from you. Get in touch with us today!': 'हमें आपसे सुनना पसंद होगा। आज ही हमसे संपर्क करें!',
        'Comprehensive Insurance & Vehicle Solutions': 'व्यापक बीमा और वाहन समाधान',
        'We offer a comprehensive range of insurance and vehicle-related services designed to protect your life, health, and assets.': 'हम बीमा और वाहन से संबंधित सेवाओं की एक व्यापक श्रृंखला प्रदान करते हैं जो आपके जीवन, स्वास्थ्य और संपत्ति की सुरक्षा के लिए डिज़ाइन की गई है।',
        'Send us a Message': 'हमें एक संदेश भेजें',
        '📍 Address': 'पता',
        'Address': 'पता',
        'Baramati, Pune': 'बारामती, पुणे',
        'Maharashtra 413102': 'महाराष्ट्र 413102',
        'India': 'भारत',
        '📞 Phone': 'फोन',
        'Phone': 'फोन',
        'Call us for quick assistance': 'त्वरित सहायता के लिए हमें कॉल करें',
        '📧 Email': 'ईमेल',
        'Email': 'ईमेल',
        'Reach out via email': 'ईमेल के माध्यम से पहुंचें',
        'ramdeshmuk30@gmail.com': 'ramdeshmuk30@gmail.com',
        '⏰ Working Hours': 'कार्य समय',
        'Working Hours': 'कार्य समय',
        '9:00 AM – 9:00 PM': 'सुबह 9:00 - रात 9:00',
        'Monday to Sunday': 'सोमवार से रविवार',
        'Find Us on Map': 'हमें नक्शे पर खोजें',
        'Quick Contact Options': 'त्वरित संपर्क विकल्प',
        '📞': '📞',
        '💬': '💬',
        '📧': '📧',
        'WhatsApp': 'व्हाट्सएप',
        'Message Now': 'अभी संदेश भेजें',
        // Services Page - Detailed
        'Secure your family\'s financial future with our comprehensive life insurance plans. Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'हमारी व्यापक जीवन बीमा योजनाओं के साथ अपने परिवार का वित्तीय भविष्य सुरक्षित करें। चाहे आप वित्तीय सुरक्षा या दीर्घकालीन बचत की तलाश कर रहे हों, हमारे पास आपके लिए परिपूर्ण समाधान है।',
        'Secure your family\'s financial future with our comprehensive life insurance plans.': 'हमारी व्यापक जीवन बीमा योजनाओं के साथ अपने परिवार का वित्तीय भविष्य सुरक्षित करें।',
        'Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'चाहे आप वित्तीय सुरक्षा या दीर्घकालीन बचत की तलाश कर रहे हों, हमारे पास आपके लिए परिपूर्ण समाधान है।',
        'Key Benefits:': 'मुख्य लाभ:',
        'Financial protection for your family members': 'आपके परिवार के सदस्यों के लिए वित्तीय सुरक्षा',
        'Long-term savings and investment opportunities': 'दीर्घकालीन बचत और निवेश के अवसर',
        'Competitive premiums with flexible payment options': 'लचीले भुगतान विकल्पों के साथ प्रतिस्पर्धी प्रीमियम',
        'Quick claim settlement and support': 'तेजी से दावा निपटान और समर्थन',
        'Customizable coverage based on your needs': 'आपकी आवश्यकताओं के आधार पर अनुकूलित कवरेज',
        'Tax benefits under Section 80C': 'धारा 80C के तहत कर लाभ',
        'Apply Now': 'अभी आवेदन करें',
        'Our Trusted Insurance Partners': 'हमारे विश्वसनीय बीमा भागीदार',
        'We are associated with leading insurance companies in India': 'हम भारत की प्रमुख बीमा कंपनियों के साथ जुड़े हैं',
        'Life & Health Insurance Partners': 'जीवन और स्वास्थ्य बीमा भागीदार',
        'General Insurance Partners': 'सामान्य बीमा भागीदार',
        'Star Health Insurance': 'स्टार हेल्थ इंश्योरेंस',
        'Tata AIA Life Insurance': 'टाटा एआईए लाइफ इंश्योरेंस',
        'Care Health Insurance': 'केयर हेल्थ इंश्योरेंस',
        'ACKO General Insurance Ltd': 'एसीकेओ जनरल इंश्योरेंस लिमिटेड',
        'Bajaj Allianz General Insurance': 'बजाज एलियांज जनरल इंश्योरेंस',
        'Cholamandalam MS General Insurance': 'चोलामंडलम एमएस जनरल इंश्योरेंस',
        'Future Generali India Insurance': 'फ्यूचर जेनेरली इंडिया इंश्योरेंस',
        'Go Digit General Insurance': 'गो डिजिट जनरल इंश्योरेंस',
        'HDFC ERGO General Insurance': 'एचडीएफसी एर्गो जनरल इंश्योरेंस',
        'ICICI Lombard General Insurance': 'आईसीआईसीआई लोम्बार्ड जनरल इंश्योरेंस',
        'IFFCO Tokio General Insurance': 'आईएफएफसीओ टोकियो जनरल इंश्योरेंस',
        'Kotak Mahindra General Insurance': 'कोटक महिंद्रा जनरल इंश्योरेंस',
        'Liberty General Insurance': 'लिबर्टी जनरल इंश्योरेंस',
        'Magma HDI General Insurance': 'मैग्मा एचडीआई जनरल इंश्योरेंस',
        'National Insurance Co. Ltd': 'नेशनल इंश्योरेंस कंपनी लिमिटेड',
        'Protect yourself and your family with our comprehensive health insurance plans offering cashless hospitalization and complete medical coverage.': 'हमारी व्यापक स्वास्थ्य बीमा योजनाओं के साथ अपने और अपने परिवार की सुरक्षा करें जो नकद रहित अस्पताल भर्ती और पूर्ण चिकित्सा कवरेज प्रदान करती हैं।',
        'Cashless hospitalization at network hospitals': 'नेटवर्क अस्पतालों में नकद रहित अस्पताल भर्ती',
        'Individual and family coverage options': 'व्यक्तिगत और पारिवारिक कवरेज विकल्प',
        'Comprehensive coverage for critical illnesses': 'गंभीर बीमारियों के लिए व्यापक कवरेज',
        'Pre and post-hospitalization expenses covered': 'अस्पताल भर्ती से पहले और बाद के खर्च को कवर किया जाता है',
        'Affordable premium plans': 'किफायती प्रीमियम योजनाएं',
        '24/7 customer support and claim assistance': '24/7 ग्राहक समर्थन और दावा सहायता',
        // About Page
        'About Ram Enterprises': 'राम एंटरप्राइजेज के बारे में',
        'Who We Are': 'हम कौन हैं',
        'Ram Enterprises is a leading insurance and vehicle solutions provider based in Baramati, Pune. With a strong commitment to excellence and customer satisfaction, we have served over 5,000 happy clients since our establishment in 2010.': 'राम एंटरप्राइजेज बारामती, पुणे में स्थित एक प्रमुख बीमा और वाहन समाधान प्रदाता है। उत्कृष्टता और ग्राहक संतुष्टि के प्रति दृढ़ प्रतिबद्धता के साथ, हमने अपनी स्थापना 2010 के बाद से 5,000 से अधिक खुश ग्राहकों की सेवा की है।',
        'Founded by Ram Deshmukh, a Financial Insurance Advisor with deep expertise in the insurance sector, Ram Enterprises has become a trusted name in providing comprehensive insurance solutions and advanced vehicle tracking services.': 'राम देशमुख द्वारा स्थापित, एक वित्तीय बीमा सलाहकार जिनके पास बीमा क्षेत्र में गहरी विशेषज्ञता है, राम एंटरप्राइजेज व्यापक बीमा समाधान और उन्नत वाहन ट्रैकिंग सेवाएं प्रदान करने में एक विश्वसनीय नाम बन गया है।',
        'Meet Our Founder': 'हमारे संस्थापक से मिलें',
        'Ram Deshmukh – Financial Insurance Advisor': 'राम देशमुख – वित्तीय बीमा सलाहकार',
        'With over 14 years of experience in the financial and insurance sector, Ram Deshmukh has dedicated his career to helping individuals and families protect their financial future.': 'वित्तीय और बीमा क्षेत्र में 14 वर्ष से अधिक के अनुभव के साथ, राम देशमुख यांने अपने करियर को व्यक्तियों और परिवारों को उनके वित्तीय भविष्य की सुरक्षा में मदद करने के लिए समर्पित किया है।',
        'His expertise spans across life insurance, health insurance, motor insurance, and emerging vehicle technology solutions.': 'उनकी विशेषज्ञता जीवन बीमा, स्वास्थ्य बीमा, मोटर बीमा और उभरती वाहन प्रौद्योगिकी समाधानों को शामिल करती है।',
        'Insurance is not just a product; it\'s peace of mind for your loved ones.': 'बीमा सिर्फ एक उत्पाद नहीं है; यह आपके प्रियजनों के लिए मानसिक शांति है।',
        'This belief has driven him to build Ram Enterprises into a trusted advisory firm that prioritizes client needs above all else.': 'यह विश्वास उन्हें राम एंटरप्राइजेज को एक विश्वसनीय सलाह फर्म में बदलने के लिए प्रेरित किया है जो सभी से ऊपर ग्राहक की आवश्यकताओं को प्राथमिकता देता है।',
        'Years of Experience': 'अनुभव के वर्ष',
        'Since Established': 'स्थापना से',
        '14+': '14+',
        // Footer & Legal
        'Privacy Policy': 'गोपनीयता नीति',
        'Terms & Conditions': 'शर्तें और शर्तें',
        'All rights reserved': 'सर्वाधिकार सुरक्षित',
        'English': 'English',
        'हिंदी (Hindi)': 'हिंदी (Hindi)',
        'मराठी (Marathi)': 'मराठी (Marathi)',
        'EN ▼': 'EN ▼',
        'Toggle Dark Mode': 'डार्क मोड टॉगल करें',
        'Select Language': 'भाषा चुनें'
    },
    mr: {
        // Navigation
        'Home': 'मुख्य पृष्ठ',
        'About Us': 'आमच्या विषयी',
        'Services': 'सेवा',
        'Contact': 'संपर्क',
        // Header & Hero
        'Ram Enterprises': 'राम एंटरप्राइजेज',
        'Secure Your Life, Health & Vehicles': 'आपल्या जीवन, स्वास्थ्य आणि वाहनांची सुरक्षा करा',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions': 'विमा आणि स्मार्ट वाहन सोल्यूशनसाठी आपला विश्वस्त भागीदार',
        'Your Trusted Partner for Insurance & Smart Vehicle Solutions since 2010. Life, Health, Motor Insurance, FASTag, and GPS Tracking services.': '2010 पासून विमा आणि स्मार्ट वाहन सोल्यूशनसाठी आपला विश्वस्त भागीदार। जीवन, आरोग्य, मोटर विमा, FASTag आणि GPS ट्रॅकिंग सेवा।',
        'Serving Since': 'पासून सेवा देत आहे',
        '✓ Serving Since': '✓ पासून सेवा देत आहे',
        '2010': '2010',
        'Happy Clients': 'खुश ग्राहक',
        '✓': '✓',
        '5000+': '5000+',
        'Get a Quote': 'उद्धरण मिळवा',
        'Call Now: 9075043523': 'आता कॉल करा: 9075043523',
        'Call Now': 'आता कॉल करा',
        '9075043523': '9075043523',
        // Services Section
        'Our Services': 'आमच्या सेवा',
        'Life Insurance': 'जीवन विमा',
        'Financial protection for your family\'s future': 'आपल्या कुटुंबाच्या भविष्यासाठी आर्थिक सुरक्षा',
        'Health Insurance': 'आरोग्य विमा',
        'Comprehensive health coverage for peace of mind': 'मनाची शांती साधण्यासाठी व्यापक आरोग्य कव्हरेज',
        'Motor Insurance': 'मोटर विमा',
        'Complete vehicle protection with quick issuance': 'त्वरित जारी करणे सह संपूर्ण वाहन संरक्षण',
        'FASTag Services': 'FASTag सेवा',
        'Fast toll payments with no manual delays': 'मैनुअल विलंब न करता वेगवान टोल भुगतान',
        'GPS Tracking': 'GPS ट्रॅकिंग',
        'Real-time vehicle tracking and anti-theft alerts': 'रीयल-टाइम वाहन ट्रॅकिंग आणि चोरी विरोधी सतर्कता',
        'View All Services': 'सर्व सेवा पहा',
        // Quote Form
        'Get Your Free Quote': 'आपला विनामूल्य उद्धरण मिळवा',
        'Ram Enterprises - Full Name': 'राम एंटरप्राइजेज - पूर्ण नाव',
        'Ram Enterprises - Phone Number': 'राम एंटरप्राइजेज - फोन नंबर',
        'Ram Enterprises - Email Address': 'राम एंटरप्राइजेज - ईमेल पत्ता',
        'Ram Enterprises - Subject': 'राम एंटरप्राइजेज - विषय',
        'Ram Enterprises - Service Interested In': 'राम एंटरप्राइजेज - रुचीचे सेवा',
        'Ram Enterprises - Message': 'राम एंटरप्राइजेज - संदेश',
        'Ram Enterprises - Service Required': 'राम एंटरप्राइजेज - आवश्यक सेवा',
        'Select a Service': 'एक सेवा निवडा',
        '-- Select a Service --': '-- एक सेवा निवडा --',
        '-- Select a Service --Life InsuranceHealth InsuranceMotor InsuranceFASTagGPS TrackingGeneral Inquiry': '-- एक सेवा निवडा --',
        'Tell us about your requirement...': 'आपल्या आवश्यकतेबद्दल आम्हाला सांगा...',
        'Please provide details about your inquiry...': 'कृपया आपल्या चौकशीबद्दल तपशील प्रदान करा...',
        'Get Quote': 'उद्धरण मिळवा',
        'Chat on WhatsApp': 'व्हाट्सअँप वर चॅट करा',
        '💬 Chat on WhatsApp': '💬 व्हाट्सअँप वर चॅट करा',
        // Why Choose Us
        'Why Choose Ram Enterprises?': 'राम एंटरप्राइजेज का निवडा?',
        'Since 2010': '2010 पासून',
        'Over a decade of trusted service and expertise': 'विश्वस्त सेवा आणि कौशल्यचे एक दशक पेक्षा अधिक',
        '5000+ Clients': '5000+ ग्राहक',
        'Thousands of satisfied customers across India': 'भारतभर हजारो समाधानी ग्राहक',
        'Verified Partners': 'सत्यापित भागीदार',
        'Associated with top insurance companies': 'शीर्ष विमा कंपन्यांशी संबंधित',
        'Expert Advisors': 'तज्ञ सल्लागार',
        'Professional guidance from experienced consultants': 'अनुभवी सल्लागारांकडून व्यावसायिक मार्गदर्शन',
        'Extended Hours': 'विस्तारित तास',
        'Available 9 AM to 9 PM for your convenience': 'आपल्या सुविधेसाठी सकाळी 9 ते रात्री 9 पर्यंत उपलब्ध',
        'Online Support': 'ऑनलाइन समर्थन',
        'Quick response via Phone, Email & WhatsApp': 'फोन, ईमेल आणि व्हाट्सअँप द्वारे जलद प्रतिक्रिया',
        // Testimonials & CTA
        'What Our Clients Say': 'आमचे ग्राहक काय म्हणतात',
        'Ready to Protect Your Future?': 'आपल्या भविष्याची रक्षा करण्यास तयार?',
        'Contact us today for a personalized insurance solution': 'व्यक्तिगत विमा उपायासाठी आज आमच्याशी संपर्क साधा',
        // Process
        'Our Simple Process': 'आमची सरल प्रक्रिया',
        'Inquiry': 'चौकशी',
        'Contact us with your requirements': 'आपल्या आवश्यकतांसह आमच्याशी संपर्क साधा',
        'Consultation': 'परामर्श',
        'Discuss your needs with our advisor': 'आमच्या सल्लागारांसह आपल्या आवश्यकतांची चर्चा करा',
        'Proposal': 'प्रस्ताव',
        'Receive customized quotation': 'कस्टमाइज केलेला उद्धरण प्राप्त करा',
        'Enrollment': 'नामांकन',
        'Complete documentation and enrollment': 'संपूर्ण दस्तऐवज आणि नामांकन',
        // Contact Page
        'Contact Us': 'आमच्याशी संपर्क साधा',
        'We\'d love to hear from you. Get in touch with us today!': 'आम्हाला आपली बोली ऐकायला आवडेल. आज आमच्याशी संपर्क साधा!',
        'Comprehensive Insurance & Vehicle Solutions': 'व्यापक विमा आणि वाहन सोल्यूशन',
        'We offer a comprehensive range of insurance and vehicle-related services designed to protect your life, health, and assets.': 'आम्ही विमा आणि वाहन-संबंधित सेवांची व्यापक श्रेणी प्रदान करतो जी आपल्या जीवन, आरोग्य आणि मालमत्तेची सुरक्षा करण्यासाठी डिजाइन केली गेली आहे।',
        'Send us a Message': 'आम्हाला संदेश पाठवा',
        '📍 Address': 'पत्ता',
        'Address': 'पत्ता',
        'Baramati, Pune': 'बारामती, पुणे',
        'Maharashtra 413102': 'महाराष्ट्र 413102',
        'India': 'भारत',
        '📞 Phone': 'फोन',
        'Phone': 'फोन',
        'Call us for quick assistance': 'जलद सहायतेसाठी आम्हाला कॉल करा',
        '📧 Email': 'ईमेल',
        'Email': 'ईमेल',
        'Reach out via email': 'ईमेल द्वारे पहुंचा',
        'ramdeshmuk30@gmail.com': 'ramdeshmuk30@gmail.com',
        '⏰ Working Hours': 'कार्य तास',
        'Working Hours': 'कार्य तास',
        '9:00 AM – 9:00 PM': 'सकाळी 9:00 - रात्री 9:00',
        'Monday to Sunday': 'सोमवार ते रविवार',
        'Find Us on Map': 'आम्हाला नक्शे वर शोधा',
        'Quick Contact Options': 'जलद संपर्क पर्याय',
        '📞': '📞',
        '💬': '💬',
        '📧': '📧',
        'WhatsApp': 'व्हाट्सअँप',
        'Message Now': 'आता संदेश पाठवा',
        // Services Page - Detailed
        'Secure your family\'s financial future with our comprehensive life insurance plans. Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'आमच्या व्यापक जीवन विमा योजनांसह आपल्या कुटुंबाचे आर्थिक भविष्य सुरक्षित करा. तुम्ही आर्थिक संरक्षण किंवा दीर्घकालीन बचत शोधत असाल किंवा, आमच्याकडे तुमच्यासाठी परिपूर्ण समाधान आहे.',
        'Secure your family\'s financial future with our comprehensive life insurance plans.': 'आमच्या व्यापक जीवन विमा योजनांसह आपल्या कुटुंबाचे आर्थिक भविष्य सुरक्षित करा.',
        'Whether you\'re looking for financial protection or long-term savings, we have the perfect solution for you.': 'तुम्ही आर्थिक संरक्षण किंवा दीर्घकालीन बचत शोधत असाल किंवा, आमच्याकडे तुमच्यासाठी परिपूर्ण समाधान आहे.',
        'Key Benefits:': 'मुख्य लाभ:',
        'Financial protection for your family members': 'आपल्या कुटुंबाच्या सदस्यांसाठी आर्थिक सुरक्षा',
        'Long-term savings and investment opportunities': 'दीर्घकालीन बचत आणि गुंतवणूक संधी',
        'Competitive premiums with flexible payment options': 'लचकदार पेमेंट पर्यायांसह प्रतिस्पर्धी प्रीमियम',
        'Quick claim settlement and support': 'जलद दावा निकाल आणि समर्थन',
        'Customizable coverage based on your needs': 'आपल्या आवश्यकतांवर आधारित कस्टमाइज करण्यायोग्य कव्हरेज',
        'Tax benefits under Section 80C': 'कलम 80C अंतर्गत कर लाभ',
        'Apply Now': 'आता अर्ज करा',
        'Our Trusted Insurance Partners': 'आमचे विश्वसनीय विमा भागीदार',
        'We are associated with leading insurance companies in India': 'आम्ही भारतातील प्रमुख विमा कंपन्यांसह संबंधित आहोत',
        'Life & Health Insurance Partners': 'जीवन आणि आरोग्य विमा भागीदार',
        'General Insurance Partners': 'सामान्य विमा भागीदार',
        'Star Health Insurance': 'स्टार हेल्थ इन्स्योरेन्स',
        'Tata AIA Life Insurance': 'टाटा एआयए लाइफ इन्स्योरेन्स',
        'Care Health Insurance': 'केअर हेल्थ इन्स्योरेन्स',
        'ACKO General Insurance Ltd': 'एसीकेओ जनरल इन्स्योरेन्स लिमिटेड',
        'Bajaj Allianz General Insurance': 'बजाज अलियांज जनरल इन्स्योरेन्स',
        'Cholamandalam MS General Insurance': 'चोलामंडलम एमएस जनरल इन्स्योरेन्स',
        'Future Generali India Insurance': 'फ्यूचर जेनेरली इंडिया इन्स्योरेन्स',
        'Go Digit General Insurance': 'गो डिजिट जनरल इन्स्योरेन्स',
        'HDFC ERGO General Insurance': 'एचडीएफसी एर्गो जनरल इन्स्योरेन्स',
        'ICICI Lombard General Insurance': 'आयसीआयसीआय लोम्बार्ड जनरल इन्स्योरेन्स',
        'IFFCO Tokio General Insurance': 'आयएफएफसीओ टोकियो जनरल इन्स्योरेन्स',
        'Kotak Mahindra General Insurance': 'कोटक महिंद्रा जनरल इन्स्योरेन्स',
        'Liberty General Insurance': 'लिबर्टी जनरल इन्स्योरेन्स',
        'Magma HDI General Insurance': 'मॅग्मा एचडीआय जनरल इन्स्योरेन्स',
        'National Insurance Co. Ltd': 'नॅशनल इन्स्योरेन्स कंपनी लिमिटेड',
        'Protect yourself and your family with our comprehensive health insurance plans offering cashless hospitalization and complete medical coverage.': 'आमच्या व्यापक आरोग्य विमा योजनांसह स्वतःची आणि आपल्या कुटुंबाची सुरक्षा करा जी नकद रहित रुग्णालयीकरण आणि संपूर्ण वैद्यकीय कव्हरेज प्रदान करतात।',
        'Cashless hospitalization at network hospitals': 'नेटवर्क रुग्णालयांमध्ये नकद रहित रुग्णालयीकरण',
        'Individual and family coverage options': 'व्यक्तिगत आणि पारिवारिक कव्हरेज पर्याय',
        'Comprehensive coverage for critical illnesses': 'गंभीर आजारांसाठी व्यापक कव्हरेज',
        'Pre and post-hospitalization expenses covered': 'रुग्णालयीकरणपूर्व आणि नंतरचे खर्च कव्हर केलेले',
        'Affordable premium plans': 'सर्वसाधारण प्रीमियम योजना',
        '24/7 customer support and claim assistance': '24/7 ग्राहक सहायता आणि दावा सहायता',
        // About Page
        'About Ram Enterprises': 'राम एंटरप्राइजेज बद्दल',
        'Who We Are': 'आम्ही कौन आहे',
        'Ram Enterprises is a leading insurance and vehicle solutions provider based in Baramati, Pune. With a strong commitment to excellence and customer satisfaction, we have served over 5,000 happy clients since our establishment in 2010.': 'राम एंटरप्राइजेज बारामती, पुणे येथे स्थित एक प्रमुख विमा आणि वाहन सोल्यूशन प्रदाता आहे. उत्कृष्टता आणि ग्राहक संतुष्टीसाठी मजबूत प्रतिबद्धतेसह, आम्ही 2010 मध्ये आमच्या स्थापनेपासून 5,000 हून अधिक आनंदी ग्राहकांची सेवा केली आहे.',
        'Founded by Ram Deshmukh, a Financial Insurance Advisor with deep expertise in the insurance sector, Ram Enterprises has become a trusted name in providing comprehensive insurance solutions and advanced vehicle tracking services.': 'राम देशमुख द्वारा स्थापित, विमा क्षेत्रात गहन विशेषज्ञता असलेला आर्थिक विमा सलाहकार, राम एंटरप्राइजेज व्यापक विमा सोल्यूशन आणि प्रगत वाहन ट्रॅकिंग सेवा प्रदान करण्यात विश्वासार्ह नाव बन गला आहे.',
        'Meet Our Founder': 'आमचे संस्थापक भेटा',
        'Ram Deshmukh – Financial Insurance Advisor': 'राम देशमुख - आर्थिक विमा सलाहकार',
        'With over 14 years of experience in the financial and insurance sector, Ram Deshmukh has dedicated his career to helping individuals and families protect their financial future.': 'आर्थिक आणि विमा क्षेत्रात 14 वर्षांहून अधिक अनुभवासह, राम देशमुख यांनी व्यक्तींना आणि कुटुंबांना त्यांचे आर्थिक भविष्य संरक्षित करण्यात मदत करण्यासाठी आपले कारकीर्द समर्पित केली आहे.',
        'His expertise spans across life insurance, health insurance, motor insurance, and emerging vehicle technology solutions.': 'त्यांची विशेषज्ञता जीवन विमा, आरोग्य विमा, मोटर विमा आणि उदयमान वाहन तंत्रज्ञान सोल्यूशन व्यापते.',
        'Insurance is not just a product; it\'s peace of mind for your loved ones.': 'विमा केवळ एक उत्पादन नाही; हे आपल्या प्रियजनांसाठी मनाची शांती आहे.',
        'This belief has driven him to build Ram Enterprises into a trusted advisory firm that prioritizes client needs above all else.': 'या विश्वासाने त्याला राम एंटरप्राइजेज एक विश्वासार्ह सल्लाह फर्मात बदलण्यास प्रेरित केले आहे जो ग्राहकांच्या गरजांना सर्व काही पूर्वस्थानी ठेवतो.',
        'Years of Experience': 'अनुभवाचे वर्ष',
        'Since Established': 'स्थापनेपासून',
        '14+': '14+',
        // Footer & Legal
        'Privacy Policy': 'गोपनीयता धोरण',
        'Terms & Conditions': 'अटी आणि शर्ती',
        'All rights reserved': 'सर्व अधिकार संरक्षित',
        'English': 'English',
        'हिंदी (Hindi)': 'हिंदी (Hindi)',
        'मराठी (Marathi)': 'मराठी (Marathi)',
        'EN ▼': 'EN ▼',
        'Toggle Dark Mode': 'डार्क मोड टॉगल करा',
        'Select Language': 'भाषा निवडा'
    }
};

// Initialize language
function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguageUI(savedLanguage);
    if (savedLanguage !== 'en') {
        translatePage(savedLanguage);
    }
}

// Update language UI
function updateLanguageUI(lang) {
    const langNames = {
        'en': 'EN ▼',
        'hi': 'HI ▼',
        'mr': 'MR ▼'
    };
    
    if (languageToggle) {
        languageToggle.textContent = langNames[lang] || langNames['en'];
    }
    
    // Update active state on language options
    langOptions.forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Toggle language dropdown
if (languageToggle) {
    languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    languageDropdown.classList.remove('active');
});

// Language option click handler
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.dataset.lang;
        localStorage.setItem('language', lang);
        updateLanguageUI(lang);
        translatePage(lang);
        languageDropdown.classList.remove('active');
    });
});

// Translate page content
function translatePage(lang) {
    if (lang === 'en') {
        location.reload();
        return;
    }

    const t = translations[lang];
    
    // Translate all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodesToUpdate = [];
    let node;
    
    while (node = walker.nextNode()) {
        const text = node.textContent.trim();
        
        // Check if this text should be translated
        if (text && t[text]) {
            nodesToUpdate.push({
                node: node,
                newText: t[text]
            });
        }
    }
    
    // Update all collected nodes
    nodesToUpdate.forEach(item => {
        item.node.textContent = item.newText;
    });
    
    // Translate form labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        const originalText = label.textContent.trim();
        if (t[originalText]) {
            label.textContent = t[originalText];
        }
    });

    // Translate headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        const originalText = heading.textContent.trim();
        if (t[originalText]) {
            heading.textContent = t[originalText];
        }
    });

    // Translate all buttons
    const buttons = document.querySelectorAll('button, a.btn, .btn');
    buttons.forEach(button => {
        const originalText = button.textContent.trim();
        if (t[originalText]) {
            button.textContent = t[originalText];
        }
    });

    // Translate paragraphs
    const paragraphs = document.querySelectorAll('p, div');
    paragraphs.forEach(para => {
        const originalText = para.textContent.trim();
        // Only translate if it's a complete match
        if (t[originalText] && originalText.length > 0) {
            para.textContent = t[originalText];
        }
    });

    // Translate span elements
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        const originalText = span.textContent.trim();
        if (t[originalText] && originalText.length > 5) { // Only translate longer spans
            span.textContent = t[originalText];
        }
    });

    // Translate input placeholders
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.placeholder && t[input.placeholder]) {
            input.placeholder = t[input.placeholder];
        }
    });

    // Translate select options
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            const originalText = option.textContent.trim();
            if (t[originalText]) {
                option.textContent = t[originalText];
            }
        });
    });

    // Translate links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const originalText = link.textContent.trim();
        if (t[originalText] && !link.classList.contains('lang-option')) {
            link.textContent = t[originalText];
        }
    });

    // Translate list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(li => {
        const originalText = li.textContent.trim();
        if (t[originalText] && originalText.length > 10) {
            li.textContent = t[originalText];
        }
    });

    // Change page direction for RTL languages if needed
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initLanguage();
});

console.log('🌙 Dark Mode & 🌍 Language Features Loaded!');
