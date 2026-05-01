#!/bin/bash

# J & I Facilities Management - Quick Commands

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print section headers
print_header() {
  echo -e "\n${BLUE}═══════════════════════════════════════${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}═══════════════════════════════════════${NC}\n"
}

# Function to print commands
print_command() {
  echo -e "${GREEN}→${NC} $1"
}

# Main menu
while true; do
  clear
  echo -e "${BLUE}"
  echo "╔═══════════════════════════════════════════════════════════╗"
  echo "║   J & I Facilities Management - Development Commands      ║"
  echo "╚═══════════════════════════════════════════════════════════╝"
  echo -e "${NC}"
  echo "1. Start Development Server"
  echo "2. Build for Production"
  echo "3. Run Production Server"
  echo "4. Run ESLint"
  echo "5. Install Dependencies"
  echo "6. Open Website (http://localhost:3000)"
  echo "7. View Configuration Guide"
  echo "8. Test Booking API"
  echo "9. Setup Environment Variables"
  echo "10. Deploy to Vercel"
  echo "0. Exit"
  echo ""
  read -p "Select an option (0-10): " choice

  case $choice in
    1)
      print_header "Starting Development Server"
      print_command "npm run dev"
      npm run dev
      ;;
    2)
      print_header "Building for Production"
      print_command "npm run build"
      npm run build
      ;;
    3)
      print_header "Running Production Server"
      print_command "npm start"
      npm start
      ;;
    4)
      print_header "Running ESLint"
      print_command "npm run lint"
      npm run lint
      ;;
    5)
      print_header "Installing Dependencies"
      print_command "npm install --legacy-peer-deps"
      npm install --legacy-peer-deps
      ;;
    6)
      print_header "Opening Website"
      print_command "Opening http://localhost:3000 in browser..."
      if command -v open &> /dev/null; then
        open "http://localhost:3000"
      elif command -v xdg-open &> /dev/null; then
        xdg-open "http://localhost:3000"
      elif command -v start &> /dev/null; then
        start "http://localhost:3000"
      fi
      ;;
    7)
      print_header "Configuration Guide"
      if [ -f "SETUP_GUIDE.md" ]; then
        cat SETUP_GUIDE.md | less
      else
        echo -e "${RED}SETUP_GUIDE.md not found${NC}"
      fi
      ;;
    8)
      print_header "Testing Booking API"
      echo "To test the booking API, send a POST request to:"
      echo -e "${YELLOW}http://localhost:3000/api/booking${NC}"
      echo ""
      echo "Example request body:"
      cat << 'EOF'
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+65 1234 5678",
  "propertyType": "condo",
  "address": "123 Main St",
  "serviceType": "house-cleaning",
  "preferredDate": "2024-05-15",
  "comments": "Please call before arrival"
}
EOF
      echo ""
      read -p "Press Enter to continue..."
      ;;
    9)
      print_header "Setup Environment Variables"
      if [ ! -f ".env.local" ]; then
        print_command "Creating .env.local from .env.example"
        cp .env.example .env.local
        echo -e "${GREEN}✓ .env.local created${NC}"
        echo ""
        echo "Please edit .env.local with your settings:"
        echo "  - SMTP_HOST (email provider)"
        echo "  - SMTP_USER (your email)"
        echo "  - SMTP_PASSWORD (email password)"
        echo "  - COMPANY_EMAIL (booking notifications)"
      else
        echo -e "${YELLOW}.env.local already exists${NC}"
        echo "Would you like to view it? (y/n)"
        read -p "> " view_choice
        if [ "$view_choice" = "y" ]; then
          cat .env.local
        fi
      fi
      read -p "Press Enter to continue..."
      ;;
    10)
      print_header "Deploy to Vercel"
      echo "To deploy to Vercel:"
      echo ""
      echo -e "${YELLOW}1. Install Vercel CLI:${NC}"
      echo "   npm install -g vercel"
      echo ""
      echo -e "${YELLOW}2. Deploy:${NC}"
      echo "   vercel deploy"
      echo ""
      echo -e "${YELLOW}3. Add environment variables in Vercel dashboard${NC}"
      echo ""
      read -p "Press Enter to continue..."
      ;;
    0)
      echo -e "\n${GREEN}Goodbye!${NC}\n"
      exit 0
      ;;
    *)
      echo -e "${RED}Invalid option. Please try again.${NC}"
      sleep 2
      ;;
  esac
done
