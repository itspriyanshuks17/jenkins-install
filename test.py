# print("Just for Jenkins trial!!")
# print("Automatic pull from Jenkins")

# print("for checking email notification for failed build"
# print("for checking email notification for failed build- now it should send that build is successful")
#Third Trial

print("Trial 4")
print("DevOps Lecture")


#Fourth Trial
print("Fedora Jenkins deployed!")
print("Jenkins and GitHub Connected")

import threading
import time
import random

def parallel_task(task_id):
    """Simulate a parallel task for Jenkins testing"""
    print(f"Task {task_id} started")
    # Simulate work with random sleep time
    sleep_time = random.uniform(1, 3)
    time.sleep(sleep_time)
    print(f"Task {task_id} completed after {sleep_time:.2f} seconds")
    return f"Result from task {task_id}"

def test_parallelism():
    """Test parallel execution with multiple threads"""
    print("Starting parallel execution test...")
    
    # Create multiple threads for parallel execution
    threads = []
    num_tasks = 5
    
    for i in range(num_tasks):
        thread = threading.Thread(target=parallel_task, args=(i+1,))
        threads.append(thread)
        thread.start()
    
    # Wait for all threads to complete
    for thread in threads:
        thread.join()
    
    print("All parallel tasks completed!")

if __name__ == "__main__":
    test_parallelism()