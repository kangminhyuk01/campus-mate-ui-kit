
#!/bin/bash
echo "Starting Campus Mate FastAPI Server..."
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
