export type Language = 'en' | 'tr';

export interface Translations {
  // Hero Section
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      rotating: string[];
      line3: string;
    };
    subtitle: string;
    ctaButton: string;
  };
  
  // Beta Signup Section
  betaSignup: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    emailPlaceholder: string;
    submitButton: string;
    loadingText: string;
    privacyText: string;
    successTitle: string;
    successMessage: string;
    successSubtext: string;
    features: string[];
  };
  
  // Showcase Section
  showcase: {
    title: {
      highlight: string;
      normal: string;
    };
    subtitle: string;
    items: {
      avatar: string;
      classicTryOn: string;
      productMatch: string;
      textToModel: string;
    };
    toggleBefore: string;
    toggleAfter: string;
  };
  
  // How It Works Section
  howItWorks: {
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    modes: {
      classic: {
        title: string;
        description: string;
      };
      productMatch: {
        title: string;
        description: string;
      };
      avatar: {
        title: string;
        description: string;
      };
      textToModel: {
        title: string;
        description: string;
      };
    };
  };
  
  // Testimonials Section
  testimonials: {
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    items: {
      name: string;
      quote: string;
      role: string;
    }[];
  };
  
  // Store Badges Section
  storeBadges: {
    title: {
      highlight: string;
      normal: string;
    };
    subtitle: string;
    features: {
      allPlatforms: {
        title: string;
        description: string;
      };
      privacy: {
        title: string;
        description: string;
      };
      speed: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
    };
    downloadButtons: {
      appStore: {
        action: string;
        store: string;
      };
      googlePlay: {
        action: string;
        store: string;
      };
    };
    qrCode: {
      title: string;
      description: string;
    };
    compatibility: {
      platforms: string;
      features: {
        realTime: string;
        advancedAI: string;
        securePrivate: string;
      };
    };
  };
  
  // Privacy Section
  privacy: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    features: {
      encryption: {
        title: string;
        description: string;
      };
      storage: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      compliance: {
        title: string;
        description: string;
      };
    };
    trustBadges: {
      title: string;
      items: {
        name: string;
        status: string;
      }[];
    };
    promise: {
      title: string;
      description: string;
      privacyPolicyButton: string;
      securityDocButton: string;
    };
    footer: {
      copyright: string;
      privacyPolicy: string;
      termsOfService: string;
      contactUs: string;
    };
  };
  
  // Common
  common: {
    before: string;
    after: string;
    loading: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      badge: "AI-Powered Virtual Try-On",
      title: {
        line1: "Virtually Try",
        line2: "Your",
        rotating: ["Fashion", "Style", "Wardrobe", "Outfit"],
        line3: "Experience",
      },
      subtitle: "Experience the future of fashion with our AI-powered virtual try-on technology. See how clothes look on you before you buy.",
      ctaButton: "Get Early Access",
    },
    
    betaSignup: {
      badge: "Limited Beta Access",
      title: {
        line1: "Be the First to",
        line2: "Experience the Magic",
      },
      subtitle: "Join our exclusive beta program and get early access to revolutionary AI-powered virtual try-on technology before everyone else.",
      emailPlaceholder: "Enter your email address",
      submitButton: "Join Beta",
      loadingText: "Joining...",
      privacyText: "No spam, unsubscribe at any time. We respect your privacy.",
      successTitle: "Pre-Registration Complete!",
      successMessage: "Welcome to the Fashaura AI beta program. We'll send you an invitation soon.",
      successSubtext: "You've been added to the waitlist. Thank you for your interest.",
      features: [
        "Early access to all features",
        "Priority customer support",
        "Exclusive beta opportunities",
        "Special launch pricing",
      ],
    },
    
    showcase: {
      title: {
        highlight: "See the",
        normal: "Magic",
      },
      subtitle: "Real customers, real results. See how Fashaura AI is transforming fashion shopping.",
      items: {
        avatar: "Perfect body mapping and virtual avatar creation with AI",
        classicTryOn: "Realistic fabric simulation with classic try-on mode",
        productMatch: "Product-model matching with instant style transformation",
        textToModel: "AI-powered text-to-model generation and style recommendations",
      },
      toggleBefore: "Before",
      toggleAfter: "After",
    },
    
    howItWorks: {
      title: {
        line1: "AI",
        line2: "Modes",
      },
      subtitle: "Choose from four powerful AI modes designed to transform your fashion experience. Each mode offers unique capabilities tailored to your needs.",
      modes: {
        classic: {
          title: "Classic Try-On",
          description: "Upload your photo and a clothing item to see how it looks on you with AI precision.",
        },
        productMatch: {
          title: "Product-Model Matching",
          description: "Select any product from our catalog and see it perfectly matched on your uploaded photo.",
        },
        avatar: {
          title: "Avatar Creation",
          description: "Just upload a selfie and we'll create a full-body avatar you can use for all your try-ons.",
        },
        textToModel: {
          title: "Text-to-Model Generation",
          description: "Describe your dream look in text and watch our AI create a stylized model matching your vision.",
        },
      },
    },
    
    testimonials: {
      title: {
        line1: "What Our Users",
        line2: "Say",
      },
      subtitle: "Discover how Fashaura AI is transforming fashion experiences for people worldwide.",
      items: [
        {
          name: "Sarah Johnson",
          quote: "Fashaura AI completely transformed my online shopping experience. The virtual try-on feature is incredibly accurate!",
          role: "Fashion Blogger",
        },
        {
          name: "Maria Garcia",
          quote: "Being able to see how clothes look on me before buying is amazing. It saves so much time and money!",
          role: "Online Shopping Enthusiast",
        },
        {
          name: "Emma Thompson",
          quote: "The AI technology is truly remarkable. It's like having a personal stylist in your pocket.",
          role: "Style Enthusiast",
        },
        {
          name: "Priya Patel",
          quote: "Finally an app that helps me find clothes that fit my body type and look great!",
          role: "Fashion Lover",
        },
        {
          name: "Jessica Chen",
          quote: "The virtual try-on is so realistic. I can't believe how well it captures how clothes would actually look.",
          role: "Tech Expert",
        },
        {
          name: "Olivia Rodriguez",
          quote: "This app has revolutionized my shopping experience. I no longer buy clothes that don't fit!",
          role: "Student",
        },
      ],
    },
    
    storeBadges: {
      title: {
        highlight: "Coming Soon",
        normal: "Download",
      },
      subtitle: "Experience the future of fashion with our revolutionary AI-powered virtual try-on technology.",
      features: {
        allPlatforms: {
          title: "All Platforms",
          description: "iOS and Android",
        },
        privacy: {
          title: "Privacy First",
          description: "Your Data Protected",
        },
        speed: {
          title: "Lightning Fast",
          description: "Instant Try-On",
        },
        ai: {
          title: "AI Powered",
          description: "Advanced Technology",
        },
      },
      downloadButtons: {
        appStore: {
          action: "Download",
          store: "App Store",
        },
        googlePlay: {
          action: "Get it on",
          store: "Google Play",
        },
      },
      qrCode: {
        title: "Scan to Download",
        description: "Use your phone camera to scan the QR code and download the app instantly.",
      },
      compatibility: {
        platforms: "Coming soon for iOS and Android platforms",
        features: {
          realTime: "Real-Time Processing",
          advancedAI: "Advanced AI",
          securePrivate: "Secure & Private",
        },
      },
    },
    
    privacy: {
      badge: "Your Privacy Matters",
      title: {
        line1: "Trusted &",
        line2: "Secure",
      },
      subtitle: "We believe privacy is a fundamental right. That's why we built Fashaura AI with security and privacy at its core.",
      features: {
        encryption: {
          title: "End-to-End Encryption",
          description: "Your photos are encrypted before they leave your device and remain secure throughout the entire process.",
        },
        storage: {
          title: "Zero Data Storage",
          description: "We don't store your personal photos on our servers. Processing happens instantly and securely.",
        },
        design: {
          title: "Privacy by Design",
          description: "Our AI models are designed to analyze clothing fit without compromising your privacy.",
        },
        compliance: {
          title: "GDPR Compliant",
          description: "We are fully compliant with GDPR, CCPA, and other international privacy regulations.",
        },
      },
      trustBadges: {
        title: "Security Certifications",
        items: [
          { name: "SOC 2 Type II", status: "Certified" },
          { name: "ISO 27001", status: "Compliant" },
          { name: "GDPR", status: "Compliant" },
          { name: "Privacy Shield", status: "Verified" },
        ],
      },
      promise: {
        title: "Our Privacy Promise",
        description: "Your photos, your data, your choice. We will never sell, share, or misuse your personal information. Our AI technology works for you, not against you.",
        privacyPolicyButton: "Read Privacy Policy",
        securityDocButton: "Security Document",
      },
      footer: {
        copyright: "© 2025 Fashaura AI. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        contactUs: "Contact Us",
      },
    },
    
    common: {
      before: "Before",
      after: "After",
      loading: "Loading...",
    },
  },
  
  tr: {
    hero: {
      badge: "Yapay Zeka Destekli Sanal Deneme",
      title: {
        line1: "Sanal Olarak",
        line2: "",
        rotating: ["Modanı", "Stilini", "Gardırobunu", "Kıyafetini"],
        line3: "Deneyimle",
      },
      subtitle: "Yapay zeka destekli sanal deneme teknolojimizle modanın geleceğini yaşayın. Satın almadan önce kıyafetlerin üzerinizde nasıl durduğunu görün.",
      ctaButton: "Erken Erişim Al",
    },
    
    betaSignup: {
      badge: "Sınırlı Beta Erişimi",
      title: {
        line1: "İlk Sen Ol",
        line2: "Sihri Yaşa",
      },
      subtitle: "Özel beta programımıza katılın ve devrimsel yapay zeka destekli sanal deneme teknolojisine herkesten önce erken erişim sağlayın.",
      emailPlaceholder: "E-posta adresinizi girin",
      submitButton: "Beta'ya Katıl",
      loadingText: "Katılıyor...",
      privacyText: "Spam yok, istediğiniz zaman abonelikten çıkabilirsiniz. Gizliliğinize saygı duyuyoruz.",
      successTitle: "Ön Kayıt Tamamlandı!",
      successMessage: "Fashaura AI beta programına hoş geldiniz. Size yakında davetiye göndereceğiz.",
      successSubtext: "Bekleme listesine alındınız. İlginiz için teşekkürler.",
      features: [
        "Tüm özelliklere erken erişim",
        "Öncelikli müşteri desteği",
        "Sadece beta test fırsatları",
        "Özel lansman fiyatlandırması",
      ],
    },
    
    showcase: {
      title: {
        highlight: "Sihiri",
        normal: "Görün",
      },
      subtitle: "Gerçek müşteriler, gerçek sonuçlar. Fashaura AI'nın moda alışverişini nasıl dönüştürdüğünü görün.",
      items: {
        avatar: "Yapay zeka ile mükemmel vücut haritalama ve sanal avatar oluşturma",
        classicTryOn: "Gerçekçi kumaş simülasyonu ile klasik deneme modu",
        productMatch: "Ürün-model uyumu ile anında stil dönüşümü",
        textToModel: "Yapay zeka destekli metin-model oluşturma ve stil önerileri",
      },
      toggleBefore: "Öncesi",
      toggleAfter: "Sonrası",
    },
    
    howItWorks: {
      title: {
        line1: "Yapay Zeka",
        line2: "Modları",
      },
      subtitle: "Moda deneyiminizi dönüştürmek için tasarlanmış dört güçlü yapay zeka modundan birini seçin. Her mod, ihtiyaçlarınıza uygun eşsiz yetenekler sunar.",
      modes: {
        classic: {
          title: "Klasik Deneme",
          description: "Fotoğrafınızı ve bir giyim eşyasını yükleyerek yapay zeka hassasiyetiyle üzerinizde nasıl durduğunu görün.",
        },
        productMatch: {
          title: "Ürün-Model Eşleştirme",
          description: "Katalogumuzdan istediğiniz ürünü seçin ve yüklediğiniz fotoğrafta mükemmel uyumla görün.",
        },
        avatar: {
          title: "Avatar Oluşturma",
          description: "Sadece bir selfie yükleyin, tüm denemeler için tekrar tekrar kullanabileceğiniz tam vücut avatarı oluşturalım.",
        },
        textToModel: {
          title: "Metin-Model Üretimi",
          description: "Hayalinizdeki görünümü metin ile anlatın, yapay zekamızın vizyonunuza uygun stilize model oluşturmasını izleyin.",
        },
      },
    },
    
    testimonials: {
      title: {
        line1: "Kullanıcılarımız",
        line2: "Ne Diyor",
      },
      subtitle: "Fashaura AI'nın dünya çapında insanların moda deneyimini nasıl dönüştürdüğünü keşfedin.",
      items: [
        {
          name: "Sarah Johnson",
          quote: "Fashaura AI online alışveriş deneyimimi tamamen değiştirdi. Sanal deneme özelliği inanılmaz derecede doğru!",
          role: "Moda Bloggerı",
        },
        {
          name: "Maria Garcia",
          quote: "Satın almadan önce kıyafetlerin üstümde nasıl durduğunu görebilmek harika. Çok zaman ve para tasarrufu sağlıyor!",
          role: "Online Alışveriş Tutkunu",
        },
        {
          name: "Emma Thompson",
          quote: "Yapay zeka teknolojisi gerçekten harika. Cebinizde kişisel bir stilist bulundurmuş gibi.",
          role: "Stil Meraklısı",
        },
        {
          name: "Priya Patel",
          quote: "Nihayet vücut tipime uygun ve güzel duran kıyafetler bulmama yardımcı olan bir uygulama!",
          role: "Moda Sevdalısı",
        },
        {
          name: "Jessica Chen",
          quote: "Sanal deneme özelliği o kadar gerçekçi ki. Kıyafetlerin gerçekte nasıl duracağını bu kadar iyi yakalamasına inanamıyorum.",
          role: "Teknoloji Uzmanı",
        },
        {
          name: "Olivia Rodriguez",
          quote: "Bu uygulama alışveriş deneyimimi devrimleştirdi. Artık uymayan kıyafet almıyorum!",
          role: "Öğrenci",
        },
      ],
    },
    
    storeBadges: {
      title: {
        highlight: "Yakında",
        normal: "İndirin",
      },
      subtitle: "Devrimsel yapay zeka destekli sanal deneme teknolojimizle modanın geleceğini deneyimleyin.",
      features: {
        allPlatforms: {
          title: "Tüm Platformlar",
          description: "iOS ve Android",
        },
        privacy: {
          title: "Gizlilik Öncelikli",
          description: "Verileriniz Korumalı",
        },
        speed: {
          title: "Yıldırım Hızı",
          description: "Anında Deneme",
        },
        ai: {
          title: "Yapay Zeka Destekli",
          description: "Gelişmiş Teknoloji",
        },
      },
      downloadButtons: {
        appStore: {
          action: "İndir",
          store: "App Store",
        },
        googlePlay: {
          action: "Al",
          store: "Google Play",
        },
      },
      qrCode: {
        title: "Tarayarak İndirin",
        description: "QR kodu taramak ve uygulamayı anında indirmek için telefon kamerasını kullanın.",
      },
      compatibility: {
        platforms: "iOS ve Android platformları için yakında",
        features: {
          realTime: "Gerçek Zamanlı İşlem",
          advancedAI: "Gelişmiş Yapay Zeka",
          securePrivate: "Güvenli ve Gizli",
        },
      },
    },
    
    privacy: {
      badge: "Gizliliğiniz Önemli",
      title: {
        line1: "Güvenilir &",
        line2: "Güvenli",
      },
      subtitle: "Gizliliğin temel bir hak olduğuna inanıyoruz. Bu yüzden Fashaura AI'yı güvenlik ve gizliliği merkez alarak inşa ettik.",
      features: {
        encryption: {
          title: "Uçtan Uca Şifreleme",
          description: "Fotoğraflarınız cihazınızı terk etmeden önce şifrelenir ve tüm işlem boyunca güvenli kalır.",
        },
        storage: {
          title: "Sıfır Veri Depolama",
          description: "Kişisel fotoğraflarınızı sunucularımızda saklamayız. İşlem anında ve güvenli bir şekilde gerçekleşir.",
        },
        design: {
          title: "Tasarımdan Gizlilik",
          description: "Yapay zeka modellerimiz gizliliğinizi tehlikeye atmadan kıyafet uyumunu analiz etmek için tasarlanmıştır.",
        },
        compliance: {
          title: "GDPR Uyumlu",
          description: "GDPR, CCPA ve diğer uluslararası gizlilik düzenlemelerine tam olarak uyumluyuz.",
        },
      },
      trustBadges: {
        title: "Güvenlik Sertifikaları",
        items: [
          { name: "SOC 2 Type II", status: "Sertifikalı" },
          { name: "ISO 27001", status: "Uyumlu" },
          { name: "GDPR", status: "Uyumlu" },
          { name: "Privacy Shield", status: "Doğrulanmış" },
        ],
      },
      promise: {
        title: "Gizlilik Sözümüz",
        description: "Fotoğraflarınız, verileriniz, seçiminiz. Kişisel bilgilerinizi asla satmayacak, paylaşmayacak veya kötüye kullanmayacağız. Yapay zeka teknolojimiz sizin için çalışır, size karşı değil.",
        privacyPolicyButton: "Gizlilik Politikasını Oku",
        securityDocButton: "Güvenlik Belgesi",
      },
      footer: {
        copyright: "© 2025 Fashaura AI. Tüm hakları saklıdır.",
        privacyPolicy: "Gizlilik Politikası",
        termsOfService: "Hizmet Koşulları",
        contactUs: "Bize Ulaşın",
      },
    },
    
    common: {
      before: "Önce",
      after: "Sonra",
      loading: "Yükleniyor...",
    },
  },
};