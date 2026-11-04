import logging

# The basic log configuration:
logging.basicConfig(
    level=logging.INFO,
    #This will determine the format of asctime in the following line insted of the default format.
    datefmt= "%Y-%m-%d %H:%M:%S", 
    format="%(asctime)s | %(name)s | %(levelname)s | %(message)s | %(lineno)d |",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler("app.log", encoding="utf-8")
    ]
)

# Creating the object of the logger:
logger = logging.getLogger(__name__)

# Some logger message example:
logger.info("Server has started")
logger.warning("Somthing might be wrong")
logger.error("An error accurred")
logger.critical("Server failddddd #$CDTEFDSDCVCVV>.......... .. . . . ")