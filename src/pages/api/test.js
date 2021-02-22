export default function handler(req, res) {
  const jsonData = {name: 'John Dute' };
  res.status(200).json(jsonData);
}