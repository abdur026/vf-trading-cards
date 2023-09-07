# **Veefriend Cards Collection Tracker**

Welcome to the Veefriend Cards Collection Tracker, your ultimate destination for managing and exploring one of the world's fastest-growing card collections. Whether you're a seasoned collector or just starting your journey, our platform is designed to help you organize, showcase, and discover a vast array of cards from around the globe. 

### **Key Features**

- **Card Collection Management**: Create an account to save and organize your card collection effortlessly. Keep track of your collection's growth, manage duplicates, and categorize your cards for easy access.

- **Discover New Cards**: Explore a diverse range of cards from various categories, including sports, entertainment, collectibles, and more. Discover rare and unique cards to add to your wishlist.

- **Community Interaction**: Connect with fellow collectors, share your collection, and discuss your favorite cards. Gain insights into the world of card collecting from a global community of enthusiasts.

# Development Setup

### **Tech Stack**
- Node.js
- Next.js
- Prisma
- Clerk
- npm


### **Installation**

To get started, follow these simple steps:

1. Clone this repository to your local machine.

```
git clone https://github.com/abdur026/vf-trading-cards.git
```
2. Install project dependencies: 
```
npm install
```


3. Copy the `.env.example` file and rename it to `.env`. Update the variables to appropriate values. 

```
DATABASE_URL='Your_DATABASE_URL'

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 'Your_Public_Clerk_Key'

CLERK_SECRET_KEY= 'Your_Secret_Clerk_Key'
```

4. Run the migration using `prisma`

```
npx prisma migrate dev
```

### Development 
Run the development server:

```bash
npm run dev
```

Once the server is up and running, open [http://localhost:3000](http://localhost:3000) in your web browser to experience the platform.

