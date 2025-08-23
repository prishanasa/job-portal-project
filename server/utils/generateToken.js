import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Create the token using the user's ID and your secret key
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The token will expire in 30 days
  });

  return token;
};

export default generateToken;