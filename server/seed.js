const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { faker } = require('@faker-js/faker');
const { User } = require('./models/User');
const { Provider } = require('./models/Provider');
const { Service } = require('./models/Service');

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');

    // Clear existing data
    await User.deleteMany({});
    await Provider.deleteMany({});
    await Service.deleteMany({});

    // Create services
    const services = [
      { name: 'Plumbing', description: 'Fix leaks, install fixtures, and more.', icon: '🔧' },
      { name: 'Electrical', description: 'Wiring, outlets, lighting repairs.', icon: '⚡' },
      { name: 'Cleaning', description: 'Home and office cleaning services.', icon: '🧹' },
      { name: 'Painting', description: 'Interior and exterior painting.', icon: '🎨' },
      { name: 'Carpentry', description: 'Woodwork, repairs, and installations.', icon: '🔨' },
      { name: 'Gardening', description: 'Lawn care and landscaping.', icon: '🌱' },
    ];
    const createdServices = await Service.insertMany(services);
    console.log(`${createdServices.length} services created.`);

    const designations = [
      { name: 'Master Plumber', services: ['Plumbing'] },
      { name: 'Journeyman Plumber', services: ['Plumbing'] },
      { name: 'Master Electrician', services: ['Electrical'] },
      { name: 'Journeyman Electrician', services: ['Electrical'] },
      { name: 'Residential Cleaner', services: ['Cleaning'] },
      { name: 'Commercial Cleaner', services: ['Cleaning'] },
      { name: 'Interior Painter', services: ['Painting'] },
      { name: 'Exterior Painter', services: ['Painting'] },
      { name: 'Finish Carpenter', services: ['Carpentry'] },
      { name: 'Rough Carpenter', services: ['Carpentry'] },
      { name: 'Landscaper', services: ['Gardening'] },
      { name: 'Gardener', services: ['Gardening'] },
      { name: 'Handyman', services: ['Plumbing', 'Electrical', 'Carpentry'] },
    ];

    // Create providers
    for (let i = 0; i < 120; i++) {
      const designation = faker.helpers.arrayElement(designations);
      const user = new User({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: 'password123', // In a real app, you would hash this
        role: 'provider',
      });
      await user.save();

      const providerServices = createdServices.filter(s => designation.services.includes(s.name));

      const provider = new Provider({
        user: user._id,
        services: providerServices.map(s => s._id),
        designation: designation.name,
        hourlyRate: faker.number.int({ min: 25, max: 100 }),
        bio: faker.lorem.sentence(),
      });
      await provider.save();
    }

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();