import os
from pymongo import MongoClient
from dotenv import load_dotenv
import logging

logger = logging.getLogger(__name__)

# Load environment variables from .env
load_dotenv()

# Get MongoDB connection string
MONGODB_URL = os.getenv("MONGODB_URL")

# Create MongoDB client
client = MongoClient(MONGODB_URL)

# Select database
db = client["todo_database"]

# Select collection
todos_collection = db["todos"]

client.admin.command("ping")
print("MongoDB connected successfully!")

print("Database name:", db.name)
print("Collection name:", todos_collection.name)
print("Documents count:", todos_collection.count_documents({}))
print("Documents:", list(todos_collection.find()))