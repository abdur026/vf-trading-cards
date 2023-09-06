# **Veefriend Cards Collection Tracker**

Welcome to the Veefriend Cards Collection Tracker, your ultimate destination for managing and exploring one of the world's fastest-growing card collections. Whether you're a seasoned collector or just starting your journey, our platform is designed to help you organize, showcase, and discover a vast array of cards from around the globe. 

### **Key Features**

- **Card Collection Management**: Create an account to save and organize your card collection effortlessly. Keep track of your collection's growth, manage duplicates, and categorize your cards for easy access.

- **Discover New Cards**: Explore a diverse range of cards from various categories, including sports, entertainment, collectibles, and more. Discover rare and unique cards to add to your wishlist.

- **Community Interaction**: Connect with fellow collectors, share your collection, and discuss your favorite cards. Gain insights into the world of card collecting from a global community of enthusiasts.

## **Getting Started**

To get started, follow these simple steps:

1. Clone this repository to your local machine.

```
 npm install
```

2. copy the `.env.example` file and rename it to `.env`. Update the variables to appropriate values. 

```
DATABASE_URL='Your_DATABASE_URL'


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 'Your_Public_Clerk_Key'

CLERK_SECRET_KEY= 'Your_Secret_Clerk_Key'
```

3. Run the migration using `prisma`

```
npx prisma migrate dev
```


Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Once the server is up and running, open [http://localhost:3000](http://localhost:3000) in your web browser to experience the platform.

## **Learn More**

To deepen your understanding of the platform and its capabilities, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API, which power the core of our application.
- [Learn Next.js](https://nextjs.org/learn) - Dive into an interactive Next.js tutorial to become proficient with the framework.

You can check out the [ Next.js GitHub repository](https://github.com/vercel/next.js/) - Contribute to the Next.js project or provide feedback on our implementation. Your contributions are welcome!

## Deploy on Vercel

Are you ready to take your card collection tracker to the next level? Deploy your Next.js app effortlessly using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. For detailed deployment instructions, please consult our [Next.js deployment documentation](https://nextjs.org/docs/deployment) 

Join us in celebrating the fascinating world of card collecting and begin your journey with Veefriend Cards Collection Tracker today!
