"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Tv,
  Sun,
  Heart,
  Sparkles,
  ChevronDown,
  X,
  Menu,
  Facebook,
  Instagram,
  Star,
  Smile,
  Pizza,
  Wifi,
  CupSoda,
  Bed,
  Brain,
  PartyPopper,
  HelpCircle,
  Gift,
} from "lucide-react"

export default function NuoiToiPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [showConfirmPopup, setShowConfirmPopup] = useState(false)
  const [showCongratPopup, setShowCongratPopup] = useState(false)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName)
    setShowConfirmPopup(true)
  }

  const handleConfirm = () => {
    setShowConfirmPopup(false)
    setShowCongratPopup(true)
  }

  const handleCancel = () => {
    setShowConfirmPopup(false)
    setSelectedPackage(null)
  }

  const handleCloseCongrat = () => {
    setShowCongratPopup(false)
    setSelectedPackage(null)
  }

  const reasons = [
    {
      icon: <CupSoda className="w-10 h-10" />,
      title: "Tiền trà sữa mỗi ngày",
      desc: "Không có trà sữa thì sao mà sống được? Đây là nhu cầu cơ bản của con người thế kỷ 21.",
    },
    {
      icon: <Tv className="w-10 h-10" />,
      title: "Gói Netflix tăng giá",
      desc: "Họ cứ tăng giá hoài, còn lương thì... à mà thôi, đừng nhắc.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Con tim bảo order thêm topping",
      desc: "Lương tâm bảo tiết kiệm, nhưng topping trân châu đang gọi tên tôi.",
    },
    {
      icon: <Wifi className="w-10 h-10" />,
      title: "Wifi không tự trả tiền",
      desc: "Internet là quyền cơ bản, nhưng hóa đơn thì không ai muốn nhìn.",
    },
  ]

  const packages = [
    {
      name: "Nuôi chơi chơi",
      price: "19K",
      period: "/ngày",
      features: ["1 ly trà đá", "1 cơn tự ái nhẹ", "2 phút suy tư về cuộc đời", "WiFi hàng xóm (nếu bắt được)"],
      featured: false,
      icon: <Smile className="w-8 h-8" />,
    },
    {
      name: "Nuôi hết mình",
      price: "99K",
      period: "/ngày",
      features: [
        "1 ly trà sữa full topping",
        "Netflix share chung 4 người",
        "1 lần thức khuya không hối hận",
        "Quota than thở: 5 lần/ngày",
      ],
      featured: true,
      icon: <Star className="w-8 h-8" />,
    },
    {
      name: "Nuôi full options",
      price: "999K",
      period: "/ngày",
      features: [
        "Combo cafe + trà sữa + snack",
        "Netflix + Spotify Premium",
        "1 áo phông cute",
        "Quyền nằm cả ngày không ai chê",
      ],
      featured: false,
      icon: <PartyPopper className="w-8 h-8" />,
    },
  ]

  const timeline = [
    {
      time: "Sáng",
      title: "Thức dậy check donation",
      desc: "Mở mắt, với tay lấy điện thoại, check xem hôm nay có ai thương mình không.",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      time: "Trưa",
      title: "Ăn trưa + suy tư 15 phút",
      desc: "Vừa ăn vừa nghĩ về tương lai. Nghĩ xong thì... thôi để mai tính.",
      icon: <Pizza className="w-8 h-8" />,
    },
    {
      time: "Chiều",
      title: "Hứa sẽ chăm chỉ từ ngày mai",
      desc: "Viết to-do list dài 20 mục, làm được 0 mục, nhưng tinh thần vẫn lạc quan.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      time: "Tối",
      title: "Xem phim, ăn snack, ngủ muộn",
      desc: "Netflix hỏi 'Bạn vẫn đang xem chứ?' - Đúng vậy, và tôi sẽ không dừng lại.",
      icon: <Bed className="w-8 h-8" />,
    },
  ]

  const testimonials = [
    {
      quote: "Nuôi nó xong tôi vẫn nghèo như cũ nhưng ít ra có meme để cười.",
      author: "Bạn A",
      color: "bg-pink-400",
    },
    {
      quote: "Tôi đã thử nuôi 7 ngày và giờ đang xem thử ai nuôi lại tôi.",
      author: "Bạn B",
      color: "bg-purple-400",
    },
    {
      quote: "10/10 sẽ nuôi lại. Không biết nuôi để làm gì nhưng vui.",
      author: "Bạn C",
      color: "bg-yellow-400",
    },
    {
      quote: "Đây là khoản đầu tư sinh lời nhất của tôi. Lời = tiếng cười.",
      author: "Bạn D",
      color: "bg-teal-400",
    },
  ]

  const faqs = [
    {
      q: "Đây có phải dự án thiện nguyện thật không?",
      a: "Không đâu bạn ơi! Đây chỉ là website parody/meme để giải trí thôi. Chúng tôi KHÔNG nhận bất kỳ khoản tiền thật nào. Nếu bạn thật sự muốn donate, hãy donate cho các tổ chức từ thiện uy tín nhé!",
    },
    {
      q: "Tôi có thể chuyển tiền thật không?",
      a: "KHÔNG! Tuyệt đối không chuyển tiền. Đây chỉ là web vui, không có bất kỳ hình thức thanh toán nào. Tiền bạn hãy giữ lấy mua trà sữa cho chính mình!",
    },
    {
      q: "Bạn có định trưởng thành không?",
      a: "Câu hỏi hay! Trưởng thành là một hành trình, không phải đích đến. Và hành trình của tôi thì... hơi chậm một xíu. Nhưng không sao, chậm mà chắc! (hoặc chậm mà... thôi kệ)",
    },
    {
      q: "Tại sao tôi nên 'nuôi' bạn?",
      a: "Bạn không nên! Đây là web giả mà. Nhưng nếu bạn cười được thì coi như tôi đã làm được việc gì đó có ích cho xã hội rồi.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating shapes background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-primary/15 rounded-full animate-float-delayed" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nuôi Tôi
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { label: "Vì sao?", id: "why" },
                { label: "Các gói nuôi", id: "packages" },
                { label: "Một ngày", id: "timeline" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-2">
              {[
                { label: "Vì sao cần được nuôi?", id: "why" },
                { label: "Các gói nuôi", id: "packages" },
                { label: "Một ngày được nuôi", id: "timeline" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Website parody - Chỉ để vui thôi!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Hãy nuôi tôi
            </span>
            <br />
            <span className="text-foreground">để tôi khỏi phải lớn!</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Tôi là một người trẻ đầy hoài bão… chỉ thiếu mỗi tiền với động lực.
            <br className="hidden sm:block" />
            Hãy giúp tôi duy trì lối sống chill mà không cần trưởng thành! 🧋✨
          </p>

          {/* Hero illustration */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background/50 shadow-inner">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating icons */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
              <CupSoda className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center animate-bounce shadow-lg animation-delay-200">
              <Tv className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-1/2 -right-4 w-10 h-10 bg-accent rounded-xl flex items-center justify-center animate-bounce shadow-lg animation-delay-400">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-1/2 -left-4 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg animation-delay-600">
              <Pizza className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("packages")}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Xem các gói nuôi 🎁
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-muted text-foreground font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-border"
            >
              Đọc tuyên ngôn lười biếng 📜
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">1,337</div>
              <div className="text-muted-foreground text-sm">Giờ xem phim thay vì làm việc</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">∞</div>
              <div className="text-muted-foreground text-sm">Ly trà sữa đã uống</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary">0</div>
              <div className="text-muted-foreground text-sm">Lần trưởng thành thành công</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section
        id="why"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vì sao tôi cần được{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">nuôi</span>? 🤔
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Những lý do không thể chối cãi (theo góc nhìn của tôi)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className={`py-20 px-4 bg-muted/50 transition-all duration-700 ${visibleSections.has("packages") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Các gói{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">nuôi</span> 🎁
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Chọn gói phù hợp với ngân sách tưởng tượng của bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card p-6 sm:p-8 rounded-3xl shadow-lg border-2 transition-all hover:shadow-xl ${
                  pkg.featured
                    ? "border-primary scale-105 md:scale-110 bg-gradient-to-br from-primary/5 to-accent/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full">
                    🔥 Phổ biến nhất
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${pkg.featured ? "bg-gradient-to-br from-primary to-accent text-white" : "bg-primary/10 text-primary"}`}
                >
                  {pkg.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    pkg.featured
                      ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
                      : "bg-muted hover:bg-primary/10 text-foreground"
                  }`}
                >
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has("timeline") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Một ngày được{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">nuôi</span> của
              tôi ⏰
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Lịch trình được tối ưu hóa cho việc... không làm gì
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full transform sm:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-4 sm:gap-8 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-16 sm:ml-0 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.time}</span>
                          <h3 className="font-bold">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`py-20 px-4 bg-muted/50 transition-all duration-700 ${visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cảm nhận từ người từng{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">nuôi tôi</span> 💬
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">(Hoàn toàn bịa đặt, như cuộc sống của tôi)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {testimonial.author.charAt(testimonial.author.length - 1)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">Người nuôi ảo</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Câu hỏi{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">thường gặp</span>{" "}
              ❓
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Những thắc mắc mà có thể bạn đang có (hoặc không)</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold hover:bg-muted/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && <div className="px-6 pb-4 text-muted-foreground animate-fadeIn">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Nuôi Tôi</span>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Cảm ơn bạn đã ghé thăm! Nhớ uống nước và đừng quên... à thôi, cứ chill đi. 😎
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Chính sách lười biếng
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Điều khoản được nuôi
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Liên hệ (nhưng đừng)
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          {/* Important disclaimer */}
          <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-sm font-medium text-primary mb-2">⚠️ LƯU Ý QUAN TRỌNG</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trang web chỉ mang tính chất <span className="font-bold text-foreground">giải trí, parody/meme</span>,
              không nhận bất kỳ khoản quyên góp hay thanh toán thật nào. Đây KHÔNG phải dự án từ thiện. Nếu bạn muốn làm
              điều tốt, hãy donate cho các tổ chức từ thiện uy tín!
            </p>
          </div>

          <div className="text-center mt-8 text-xs text-muted-foreground">
            © 2025 Nuôi Tôi. Made with 😴 and ☕ (mà chưa có ai mua cho)
          </div>
        </div>
      </footer>

      {showConfirmPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn">
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center">
              {/* Animated icon */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-12 h-12 text-primary animate-bounce" />
                </div>
                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>
                  🤔
                </div>
                <div className="absolute top-1/2 -right-4 text-xl animate-bounce" style={{ animationDelay: "0.4s" }}>
                  💭
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">Bạn chắc chứ? 🤨</h3>
              <p className="text-muted-foreground mb-2">
                Bạn đang chọn gói <span className="font-bold text-primary">{selectedPackage}</span>
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                (Nhớ là web này chỉ để vui thôi nha, không có thanh toán thật đâu!)
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 bg-muted text-foreground font-bold rounded-full hover:bg-muted/80 transition-all"
                >
                  Suy nghĩ thêm 🤔
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Tôi chắc chắn! 💪
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCongratPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn overflow-hidden">
            {/* Confetti background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `-10%`,
                    backgroundColor: ["#FF6B6B", "#6C63FF", "#FFD93D", "#6BCB77", "#FF9FF3"][i % 5],
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleCloseCongrat}
              className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center relative z-10">
              {/* Celebration icon */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl animate-bounce">🎉</span>
                </div>
                {/* Floating celebration icons */}
                <div className="absolute -top-4 -right-4 text-3xl animate-bounce">🥳</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: "0.2s" }}>
                  🎊
                </div>
                <div className="absolute top-0 -left-6 text-2xl animate-bounce" style={{ animationDelay: "0.4s" }}>
                  ⭐
                </div>
                <div className="absolute bottom-0 -right-6 text-2xl animate-bounce" style={{ animationDelay: "0.6s" }}>
                  💖
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Chúc mừng! 🎉
              </h3>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 mb-6">
                <p className="text-lg font-medium text-foreground mb-2">Bạn đúng là một người tuyệt vời!</p>
                <p className="text-muted-foreground">
                  <span className="font-bold text-primary">Hân</span> sẽ ghi nhớ bạn mãi mãi 💕
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Gift className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Gói đã chọn: <span className="font-bold text-foreground">{selectedPackage}</span>
                </span>
              </div>

              <button
                onClick={handleCloseCongrat}
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg transition-all"
              >
                Cảm ơn bạn nhiều! 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
