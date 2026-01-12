import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (


    <main id="no-scrollbar-main" className="w-full flex flex-col items-center bg-[#0A0A0A] overflow-x-hidden">
      {/* MAIN SECTION: Fixed 1440x960 */}
  <style>{`
      #no-scrollbar-main::-webkit-scrollbar {
          display: none;
        }
        #no-scrollbar-main {
          -ms-overflow-style: none;
          scrollbar-width: none;
          height: 100vh;
          overflow-y: scroll;
        }
        body {
          margin: 0;
          padding: 0;
          overflow: hidden; /* This prevents the double scrollbar */
        }
      `}</style>
      {/* SECTION 1: HERO (Image height fixed to 1020px to hide grey gap) */}
      <section 
        style={{
          width: "1440px",
          height: "960px",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src="/heroimage.webp"
          alt="The Sterling Estate"
          style={{
            position: "absolute",
            width: "1440px",
            height: "1020px", // Fixed: covers the -60px offset
            top: "-60px",
            left: "0px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 42.17%, rgba(0, 0, 0, 0.64) 70.98%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "662px",
            height: "126px",
            top: "645px",
            left: "389px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <p style={{
              width: "607px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "2.8px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#FFFFFFCC",
              margin: 0,
            }}
          >
            Presented with intention, clarity, and discretion
          </p>
          <h1 style={{
              width: "663px",
              height: "91px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "90px",
              lineHeight: "91px",
              letterSpacing: "-2px",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            The Sterling Estate
          </h1>
        </div>
      </section>

{/* SECTION 2: COMPETITIVE EDGE */}
      <section 
        style={{
          width: "1440px",
          height: "900px",
          borderTop: "0.8px solid #FFFFFF0D",
          paddingTop: "66px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F9F8F7" // Soft neutral to match the image luxury feel
        }}
      >
        <div style={{ width: "1300px", height: "534px", display: "flex", gap: "188px" }}>
          
          {/* LEFT SIDE: FRAME 1 */}
          <div style={{ width: "546px", height: "427px", display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* Title and Body */}
            <div style={{ width: "546px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 style={{ 
                fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "60px", lineHeight: "60px", letterSpacing: "-2px", color: "#121212" 
              }}>
                Defining the<br/>Competitive Edge.
              </h2>
              <p style={{ 
                fontFamily: "Outfit", fontWeight: 400, fontSize: "20px", lineHeight: "31px", letterSpacing: "0.3px", color: "rgba(0,0,0,0.7)" 
              }}>
                Success in the luxury tier is determined long before the first showing. We move beyond basic pricing to analyze local scarcity, global wealth migration patterns, and buyer psychology. Our goal is to position your home not just as another listing, but as a once-in-a-generation acquisition.
              </p>
            </div>

            {/* Metrics: Frame 1.2 */}
            <div style={{ display: "flex", alignItems: "center", gap: "35px" }}>
              {/* Demand Index */}
              <div style={{ width: "171px" }}>
                <div style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "38px", lineHeight: "60.8px", color: "#121212" }}>94/100</div>
                <div style={{ fontFamily: "Outfit", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Demand Index</div>
              </div>
              
              {/* Vertical Divider */}
              <div style={{ width: "1px", height: "88px", backgroundColor: "#0000001A" }} />

              {/* Inventory Scarcity */}
              <div style={{ width: "171px" }}>
                <div style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "38px", lineHeight: "60.8px", color: "#121212" }}>Critical</div>
                <div style={{ fontFamily: "Outfit", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Inventory Scarcity</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FRAME 2 (The Card) */}
          <div style={{ 
            width: "566px", 
            height: "534px", 
            backgroundColor: "#222222", // Dark base from Container.png
            borderRadius: "10px",
            position: "relative",
            backdropFilter: "blur(37.6px)",
            padding: "95px 28px 28px 28px"
          }}>
            <h3 style={{ 
              fontFamily: "Outfit", fontSize: "24px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "69px" 
            }}>
              Recent Landmark Closings
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Row 1 */}
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px" }}>
                <span style={{ fontFamily: "Instrument Sans", fontSize: "24px", color: "#FFFFFF" }}>The Glass Pavilion</span>
                <span style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "24px", color: "#C5A059" }}>$8.4M (Sold)</span>
              </div>
              {/* Row 2 */}
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px" }}>
                <span style={{ fontFamily: "Instrument Sans", fontSize: "24px", color: "#FFFFFF" }}>Skyline Sanctuary</span>
                <span style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "24px", color: "#C5A059" }}>$9.1M (Active)</span>
              </div>
              {/* Row 3 */}
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px" }}>
                <span style={{ fontFamily: "Instrument Sans", fontSize: "24px", color: "#FFFFFF" }}>Harbor View Estate</span>
                <span style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "24px", color: "#C5A059" }}>$7.9M (Sold)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

<section 
  style={{
    width: "1440px",
    height: "900px",
    backgroundColor: "#F7F3ED",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}
>
  <div style={{ width: "1240px", display: "flex", gap: "100px", alignItems: "center" }}>
    
    {/* Profile Image Frame */}
    <div style={{ width: "450px", height: "650px", overflow: "hidden", borderRadius: "12px" }}>
      <img 
        src="/sarah-mitchell.webp" 
        alt="Sarah Mitchell" 
        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
      />
    </div>

    {/* Content Frame */}
    <div style={{ width: "580px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h2 style={{ 
          fontFamily: "Cormorant Garamond", fontSize: "64px", fontWeight: 400, color: "#121212", margin: "0 0 24px 0" 
        }}>
          Sarah Mitchell
        </h2>
        <p style={{ 
          fontFamily: "Outfit", fontSize: "18px", lineHeight: "1.6", color: "#121212CC", maxWidth: "520px" 
        }}>
          With over $500M in luxury transactions, my approach is defined by one core principle: Client Advocacy. 
          My job is to insulate you from the friction of the transaction while aggressively negotiating the 
          highest possible net for your asset.
        </p>
      </div>

      {/* Services List */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[
          { id: "01", label: "Lead Negotiator & Fiduciary" },
          { id: "02", label: "Private Client Network Access" },
          { id: "03", label: "Concierge Pre-Listing Management" }
        ].map((service, index) => (
          <div key={index} style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "24px 0", 
            borderBottom: "0.8px solid #0000001A",
            gap: "40px"
          }}>
            <span style={{ 
              fontFamily: "Cormorant Garamond", fontSize: "24px", color: "#C5A059", width: "40px" 
            }}>
              {service.id}
            </span>
            <span style={{ 
              fontFamily: "Outfit", fontSize: "20px", color: "#121212" 
            }}>
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section 
  style={{
    width: "1440px",
    backgroundColor: "#FDFBF7",
    padding: "100px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}
>
  {/* Header Frame */}
  <div style={{ textAlign: "center", marginBottom: "64px" }}>
    <h2 style={{ 
      fontFamily: "Cormorant Garamond", fontSize: "64px", fontWeight: 400, color: "#121212", margin: "0 0 16px 0" 
    }}>
      Recent Sales
    </h2>
    <p style={{ 
      fontFamily: "Outfit", fontSize: "18px", color: "#12121280", maxWidth: "450px", margin: "0 auto", lineHeight: "1.5" 
    }}>
      Real results from properties we've represented in the past 12 months.
    </p>
  </div>

  {/* Cards Grid */}
  <div style={{ display: "flex", gap: "24px", width: "1300px" }}>
    {[
      {
        img: "/public/property-1.webp",
        address: "1425 Sunset Plaza Drive",
        location: "West Hollywood",
        listed: "$6,995,000",
        sold: "$7,850,000",
        days: "12 days",
        over: "+12% over ask"
      },
      {
        img: "/public/property-2.webp",
        address: "9876 Mulholland Drive",
        location: "West Hollywood",
        listed: "$6,995,000",
        sold: "$7,850,000",
        days: "12 days",
        over: "+12% over ask"
      },
      {
        img: "/public/property-3.webp",
        address: "2340 Pacific Coast Highway",
        location: "West Hollywood",
        listed: "$6,995,000",
        sold: "$7,850,000",
        days: "12 days",
        over: "+12% over ask"
      }
    ].map((item, idx) => (
      <div key={idx} style={{ 
        flex: 1, 
        backgroundColor: "#FFFFFF", 
        border: "1px solid #E5E1DB", 
        borderRadius: "12px", 
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        {/* Property Image with 'Sold' Badge */}
        <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
          <img src={item.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ 
            position: "absolute", top: "16px", right: "16px", 
            backgroundColor: "#C5A059", color: "#FFF", 
            padding: "4px 12px", borderRadius: "4px", 
            fontFamily: "Outfit", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" 
          }}>
            Sold
          </div>
        </div>

        {/* Property Details */}
        <div style={{ padding: "0 8px 8px 8px" }}>
          <h3 style={{ fontFamily: "Outfit", fontSize: "20px", fontWeight: 400, margin: "0 0 4px 0" }}>{item.address}</h3>
          <p style={{ fontFamily: "Outfit", fontSize: "14px", color: "#12121260", margin: "0 0 24px 0" }}>{item.location}</p>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
             <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "Outfit", fontSize: "12px", color: "#12121260", textTransform: "uppercase" }}>Listed</span>
                <span style={{ fontFamily: "Outfit", fontSize: "16px" }}>{item.listed}</span>
             </div>
             <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <span style={{ fontFamily: "Outfit", fontSize: "12px", color: "#C5A059", textTransform: "uppercase" }}>Sold</span>
                <span style={{ fontFamily: "Outfit", fontSize: "16px", color: "#C5A059" }}>{item.sold}</span>
             </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #F0EFEA" }}>
             <span style={{ fontFamily: "Outfit", fontSize: "14px", color: "#12121260" }}>{item.days}</span>
             <span style={{ fontFamily: "Outfit", fontSize: "14px", color: "#C5A059" }}>{item.over}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section 
  style={{
    width: "1440px",
    backgroundColor: "#1A1A1A", // Deep charcoal background
    padding: "120px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFFFFF"
  }}
>
  {/* SECTION HEADER */}
  <div style={{ textAlign: "center", marginBottom: "80px" }}>
    <h2 style={{ 
      fontFamily: "Cormorant Garamond", fontSize: "64px", fontWeight: 400, marginBottom: "24px" 
    }}>
      What We Create For Your Home
    </h2>
    <p style={{ 
      fontFamily: "Outfit", fontSize: "18px", color: "#FFFFFF80", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" 
    }}>
      Your property receives cinematic storytelling and a custom digital presence that commands attention in the luxury market.
    </p>
  </div>

  {/* MODULE 1: CINEMATIC LISTING VIDEOS */}
  <div style={{ width: "1300px", marginBottom: "120px" }}>
    <div style={{ 
      display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" 
    }}>
      <div style={{ height: "1px", flex: 1, backgroundColor: "#FFFFFF26" }} />
      <span style={{ fontFamily: "Outfit", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "#FFFFFF80" }}>
        Cinematic Listing Videos
      </span>
      <div style={{ height: "1px", flex: 1, backgroundColor: "#FFFFFF26" }} />
    </div>

    {/* Main Video Feature */}
    <div style={{ position: "relative", width: "100%", height: "600px", borderRadius: "12px", overflow: "hidden", marginBottom: "32px" }}>
      <img src="/video-thumbnail-main.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
        <h3 style={{ fontFamily: "Outfit", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Modern Estate – Beverly Hills</h3>
        <p style={{ fontFamily: "Outfit", fontSize: "16px", color: "#FFFFFFB3", maxWidth: "450px", lineHeight: "1.5" }}>
          2-minute cinematic experience featuring aerial cinematography, professional color grading, and emotive storytelling.
        </p>
      </div>
      {/* Play Button Icon Overlay */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", border: "1px solid #FFFFFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "15px solid white", marginLeft: "5px" }} />
      </div>
    </div>

    {/* Small Video Thumbnails */}
    <div style={{ display: "flex", gap: "20px" }}>
      {["Outdoor Lifestyle", "Interior Sequences", "Aerial Cinematography", "Twilight Magic Hour"].map((label, idx) => (
        <div key={idx} style={{ flex: 1 }}>
          <div style={{ height: "180px", borderRadius: "8px", overflow: "hidden", marginBottom: "12px", border: "1px solid #FFFFFF1A" }}>
            <img src={`/thumb-${idx}.jpg`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontFamily: "Outfit", fontSize: "12px", textAlign: "center", color: "#FFFFFF66", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* MODULE 2: LUXURY PROPERTY WEBSITES */}
  <div style={{ width: "1300px" }}>
    <div style={{ 
      display: "flex", alignItems: "center", gap: "24px", marginBottom: "60px" 
    }}>
      <div style={{ height: "1px", flex: 1, backgroundColor: "#FFFFFF26" }} />
      <span style={{ fontFamily: "Outfit", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "#FFFFFF80" }}>
        Luxury Property Websites
      </span>
      <div style={{ height: "1px", flex: 1, backgroundColor: "#FFFFFF26" }} />
    </div>

    <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
      {/* Website Browser Mockup */}
      <div style={{ flex: 1, position: "relative" }}>
        <div style={{ backgroundColor: "#F7F3ED", borderRadius: "12px 12px 0 0", padding: "12px 20px", display: "flex", gap: "8px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
        </div>
        <img src="/website-mockup.jpg" style={{ width: "100%", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }} />
      </div>

      {/* Website Features List */}
      <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h3 style={{ fontFamily: "Cormorant Garamond", fontSize: "40px", marginBottom: "20px" }}>A digital experience worthy of your property.</h3>
          <p style={{ fontFamily: "Outfit", fontSize: "16px", color: "#FFFFFF80", lineHeight: "1.6" }}>
            Each listing receives its own custom domain and website—designed to captivate buyers before they ever step through the door. No templates. No compromise.
          </p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[
            { title: "Custom Domain", desc: "Your home gets its own branded URL (e.g., theatlasresidence.com)" },
            { title: "Immersive Galleries", desc: "Full-screen photo galleries with cinematic video integration" },
            { title: "Mobile Optimized", desc: "Flawless experience on every device, from iPhone to desktop" }
          ].map((feature, i) => (
            <div key={i} style={{ display: "flex", gap: "20px" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #C5A059", display: "flex", alignItems: "center", justifyContent: "center", color: "#C5A059", fontSize: "10px" }}>✓</div>
              <div>
                <h4 style={{ fontFamily: "Outfit", fontSize: "18px", marginBottom: "4px" }}>{feature.title}</h4>
                <p style={{ fontFamily: "Outfit", fontSize: "14px", color: "#FFFFFF66" }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}