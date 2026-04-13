import React from "react";
import { Plane, Clock } from "lucide-react";

const PricingSection = () => {
  const airportTransfers = [
    {
      route: "St Andrews → Edinburgh Airport",
      duration: "1 hour 15 mins",
      price: "£150",
    },
    {
      route: "Edinburgh Airport → St Andrews",
      duration: "1 hour 15 mins",
      price: "£150",
    },
    {
      route: "St Andrews → Glasgow Airport",
      duration: "1 hour 45 mins",
      price: "£180",
    },
    {
      route: "Glasgow Airport → St Andrews",
      duration: "1 hour 45 mins",
      price: "£180",
    },
  ];

  const localRoutes = [
    { route: "Crail → St Andrews", duration: "15 mins", price: "£30" },
    { route: "St Andrews → Elie", duration: "25 mins", price: "£35" },
    { route: "Elie → St Andrews", duration: "25 mins", price: "£35" },
  ];

  const RouteBox = ({ title, routes }) => (
    <div
      style={{
        width: "100%",
        // Silver border
        border: "1px solid #cbd5e1",
        borderRadius: "12px",
        padding: "20px",
        boxSizing: "border-box",
        marginTop: "30px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
            // Navy Blue icon
            color: "#001C3D",
          }}
        >
          <Plane size={18} />
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {title}
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {routes.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 22px",
                // Light silver border
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                width: "100%",
                // Soft background for price row
                backgroundColor: "#f8fafc",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "4px",
                    // Deep dark text
                    color: "#001C3D",
                  }}
                >
                  {item.route}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    // Slate Grey text for details
                    color: "#7f8c8d",
                  }}
                >
                  <Clock size={12} />
                  {item.duration}
                </div>
              </div>

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  // Metallic Silver color for the actual price
                  color: "#cbd5e1",
                }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "#fff",
        fontFamily: "'Inter', Arial, sans-serif",
        width: "100%",
      }}
    >
      {/* Header */}
      <div style={{ width: "100%", padding: "0 40px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          <span
            // Silver side bar
            style={{ height: "2px", width: "24px", background: "#cbd5e1" }}
          />
          <span
            style={{
              // Slate Grey text for the tag
              color: "#7f8c8d",
              fontWeight: "600",
              fontSize: "10px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
            }}
          >
            Our Pricing
          </span>
          <span
            style={{ height: "2px", width: "24px", background: "#cbd5e1" }}
          />
        </div>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "8px",
            color: "#002B5B",
          }}
        >
          Transparent Rates
        </h2>

        <p
          style={{
            fontSize: "14px",
            // General Grey text for description
            color: "#64748b",
            maxWidth: "500px",
            lineHeight: "1.6",
            fontLight: "300",
          }}
        >
          No hidden fees, no surprises. Just honest pricing for quality service
          across Scotland.
        </p>
      </div>

      {/* Sections */}
      <RouteBox title="Airport Transfers" routes={airportTransfers} />
      <RouteBox title="Local Routes" routes={localRoutes} />

      {/* Footer Call Box - Navy Blue Theme */}
      <div
        style={{
          marginTop: "50px",
          padding: "40px 20px",
          textAlign: "center",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,28,61,0.08)", // subtle navy shadow
          width: "100%",
          // Navy Blue background
          backgroundColor: "#001C3D",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            // Silver text for description
            color: "#bdc3c7",
            margin: "0 0 8px 0",
            fontWeight: "500",
          }}
        >
          Don't see your route? We cover all of Scotland & UK!
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#bdc3c7",
            fontWeight: "500",
            margin: 0,
          }}
        >
          Call{" "}
          <span
            style={{
              // Shining Silver for the phone number
              color: "#cbd5e1",
              fontWeight: "800",
              fontSize: "18px",
              letterSpacing: "0.5px",
            }}
          >
            +447999435333
          </span>{" "}
          for a custom quote
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
