// WildGuard Dashboard Data Model
const wildGuardDashboard = {
    currentRiskLevel: "HIGH",
    recentSightings: 12,
    activeProtections: 8,
    availableSupport: 25000, // In ₹
    user: "Farmer John",

    // Method to display dashboard summary
    displaySummary: function() {
        console.log(Welcome to WildGuard Dashboard);
        console.log(Protecting your livelihood from wildlife conflicts with AI-powered insights);
        console.log(Risk Level: ${this.currentRiskLevel});
        console.log(Recent Sightings: ${this.recentSightings});
        console.log(Active Protections: ${this.activeProtections});
        console.log(Available Support: ₹${this.availableSupport.toLocaleString()});
    },

    // Method to view protection status (simulated)
    viewProtectionStatus: function() {
        console.log(Viewing Protection Status...);
        console.log(You have ${this.activeProtections} active protections in place.);
        // Additional detailed info could be added here
    }
}

// Use the dashboard object
wildGuardDashboard.displaySummary();

// Simulate user clicking "View Protection Status"
wildGuardDashboard.viewProtectionStatus();