# Car Dealerships and Reviews Application
> **IBM Full Stack Cloud Developer Capstone Project**  
> Developed by: **Samarth Toge**

---

## 📌 Project Overview
The **Car Dealerships and Reviews Application** is a full-stack, cloud-native enterprise web application that connects prospective vehicle buyers with nationwide dealerships and authentic customer reviews. The application incorporates intelligent sentiment analysis on user reviews using natural language processing microservices.

### Key Capabilities:
- **Dealership Directory & Exploration:** Browse a nationwide catalog of dealerships, filter by state, and view detailed dealer information.
- **Review System & Sentiment Analysis:** Read user reviews tagged with AI sentiment badges (positive, negative, neutral) and submit new customer reviews with verified purchase details.
- **User Authentication:** Complete user registration, secure session-based login, and logout.
- **Car Inventory Management:** View dynamically retrieved car makes, models, and years managed via Django models and admin portal.
- **Microservice Architecture:** Independent backend microservices running on Express/Node.js, Python Flask (Watson NLU sentiment analyzer), and Django with MongoDB/Cloudant databases.
- **Continuous Integration & Continuous Deployment (CI/CD):** Automated testing and linting via GitHub Actions workflows and automated container deployment to IBM Cloud Code Engine / Kubernetes.

---

## 🏛️ Application Architecture

```
                       +---------------------------------------+
                       |           React Frontend              |
                       |       (Static HTML & Components)      |
                       +---------------------------------------+
                                           |
                                      REST / JSON
                                           v
                       +---------------------------------------+
                       |            Django Backend             |
                       |        (User Auth, Proxy, APIs)       |
                       +---------------------------------------+
                               /                       \
                     REST API /                         \ REST API
                             v                           v
+---------------------------------------+     +---------------------------------------+
|        Node.js / Express Service      |     |     Flask Sentiment Analyzer Service  |
|       (Dealers & Reviews Provider)    |     |          (IBM Watson NLU Engine)      |
+---------------------------------------+     +---------------------------------------+
                    |
                    v
+---------------------------------------+
|           MongoDB Database            |
|       (Dealerships & Reviews Data)    |
+---------------------------------------+
```

---

## 🗂️ Project Directory Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI/CD pipeline
├── server/
│   ├── frontend/
│   │   ├── static/
│   │   │   ├── About.html       # Task 3: Updated About Us page
│   │   │   └── Contact.html     # Task 4: Updated Contact Us page
│   │   └── src/
│   │       └── components/
│   │           └── Register/
│   │               └── Register.jsx  # Task 7: Sign-up page component
├── django_server                # Task 2: Terminal output for running Django server
├── loginuser                    # Task 5: cURL command & output for user login
├── logoutuser                   # Task 6: cURL command & output for user logout
├── getdealerreviews             # Task 8: cURL command & output for dealer reviews
├── getalldealers                # Task 9: cURL command & output for all dealerships
├── getdealerbyid                # Task 10: cURL command & output for dealer by ID
├── getdealersbyState            # Task 11: cURL command & output for Kansas dealers
├── admin_login.png              # Task 12: Root user login on Django admin page
├── admin_logout.png             # Task 13: Admin logged out screen
├── getallcarmakes               # Task 14 & 15: cURL command & output for car makes/models
├── analyzereview                # Task 16: cURL command & output for sentiment analysis
├── get_dealers.png              # Task 17: Dealers on home page before login
├── get_dealers_loggedin.png     # Task 18: Dealers after login with Review Dealer option
├── dealersbystate.png           # Task 19: Dealers filtered by state with visible URL
├── dealer_id_reviews.png        # Task 20: Dealer details with reviews and visible URL
├── dealership_review_submission.png # Task 21: Post Review form filled before submission
├── added_review.png             # Task 22: Newly posted review visible
├── CICD                         # Task 23: Successful GitHub Actions terminal output
├── deploymentURL                # Task 24: Deployed application URL
├── deployed_landingpage.png     # Task 25: Deployed application landing page
├── deployed_loggedin.png        # Task 26: Deployed logged-in page with username
├── deployed_dealer_detail.png   # Task 27: Deployed dealer details page
├── deployed_add_review.png      # Task 28: Deployed review displayed
└── README.md                    # Task 1: Project details and documentation
```

---

## 📋 Capstone Grading Criteria & Deliverables Mapping (50 Points)

| Task # | Deliverable | Description | Points |
|---|---|---|---|
| **Task 1** | `README.md` | Public GitHub URL of README with Project name details | 1 |
| **Task 2** | `django_server` | Terminal output showing Django server running | 1 |
| **Task 3** | `server/frontend/static/About.html` | Updated About Us page with images, team, roles, bios, and emails | 3 |
| **Task 4** | `server/frontend/static/Contact.html` | Contact Us page with active navbar, images, and contact info | 2 |
| **Task 5** | `loginuser` | cURL command & output for login operation | 2 |
| **Task 6** | `logoutuser` | cURL command & output for logout operation | 2 |
| **Task 7** | `server/frontend/src/components/Register/Register.jsx` | React Sign-up component with 5 input fields + Register button | 1 |
| **Task 8** | `getdealerreviews` | cURL command & output displaying reviews for dealer ID | 2 |
| **Task 9** | `getalldealers` | cURL command & output displaying all dealers | 2 |
| **Task 10** | `getdealerbyid` | cURL command & output displaying details for dealer ID | 2 |
| **Task 11** | `getdealersbyState` | cURL command & output for dealers in Kansas | 2 |
| **Task 12** | `admin_login.png` | Screenshot of root user logged in to Django Admin | 2 |
| **Task 13** | `admin_logout.png` | Screenshot of root user logged out from Django Admin | 1 |
| **Task 14 & 15** | `getallcarmakes` | cURL command & output for car makes and models | 4 |
| **Task 16** | `analyzereview` | cURL command & output for sentiment analysis of "Fantastic services" | 2 |
| **Task 17** | `get_dealers.png` | Screenshot of home page dealers before login | 1 |
| **Task 18** | `get_dealers_loggedin.png` | Screenshot of logged-in home page with username & Review Dealer | 2 |
| **Task 19** | `dealersbystate.png` | Screenshot of dealers filtered by state with URL in address bar | 2 |
| **Task 20** | `dealer_id_reviews.png` | Screenshot of dealer details & reviews with URL in address bar | 1 |
| **Task 21** | `dealership_review_submission.png` | Screenshot of Post Review page before submission | 1 |
| **Task 22** | `added_review.png` | Screenshot showing posted review | 2 |
| **Task 23** | `CICD` | Terminal output showing GitHub Actions workflow passing | 3 |
| **Task 24** | `deploymentURL` | Deployed web application URL | 1 |
| **Task 25** | `deployed_landingpage.png` | Screenshot of deployed landing page | 2 |
| **Task 26** | `deployed_loggedin.png` | Screenshot of deployed logged-in page | 2 |
| **Task 27** | `deployed_dealer_detail.png` | Screenshot of deployed dealer details page | 2 |
| **Task 28** | `deployed_add_review.png` | Screenshot of review on deployed application | 2 |
| **Total** | | | **50 Points** |

---

## 🚀 Running the Project Locally

### 1. Backend Django Setup
```bash
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
```

### 2. Microservice Setup (Dealers & Reviews)
```bash
cd server/database
npm install
node app.js
```

### 3. Sentiment Analysis Microservice
```bash
cd server/djangoapp/microservices
pip install -r requirements.txt
python app.py
```

---

## 🌐 Deployment Details
The application is deployed on **IBM Cloud Code Engine**:
- **Application URL:** [https://dealershipapp-samarth.us-south.codeengine.appdomain.cloud/](https://dealershipapp-samarth.us-south.codeengine.appdomain.cloud/)
