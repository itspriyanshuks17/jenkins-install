
import threading
import time
import random
import concurrent.futures
from multiprocessing import Pool, cpu_count

def cpu_intensive_task(task_id):
    """Simulate CPU-intensive work for testing parallelism"""
    start_time = time.time()
    # Simulate work by calculating fibonacci numbers
    n = random.randint(30, 35)
    result = fibonacci(n)
    end_time = time.time()
    
    print(f"Task {task_id}: Calculated fibonacci({n}) = {result} in {end_time - start_time:.2f}s")
    return {"task_id": task_id, "result": result, "duration": end_time - start_time}

def fibonacci(n):
    """Calculate fibonacci number recursively (CPU intensive)"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

def io_intensive_task(task_id):
    """Simulate I/O-intensive work for testing parallelism"""
    start_time = time.time()
    # Simulate network delay or file I/O
    sleep_time = random.uniform(1, 3)
    time.sleep(sleep_time)
    end_time = time.time()
    
    print(f"I/O Task {task_id}: Completed after {sleep_time:.2f}s sleep")
    return {"task_id": task_id, "sleep_time": sleep_time, "duration": end_time - start_time}

def test_threading_parallelism():
    """Test parallelism using threading (good for I/O bound tasks)"""
    print("Testing Threading Parallelism...")
    start_time = time.time()
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(io_intensive_task, i) for i in range(8)]
        results = [future.result() for future in concurrent.futures.as_completed(futures)]
    
    end_time = time.time()
    print(f"Threading test completed in {end_time - start_time:.2f}s")
    return results

def test_multiprocessing_parallelism():
    """Test parallelism using multiprocessing (good for CPU bound tasks)"""
    print("Testing Multiprocessing Parallelism...")
    start_time = time.time()
    
    with Pool(processes=cpu_count()) as pool:
        results = pool.map(cpu_intensive_task, range(4))
    
    end_time = time.time()
    print(f"Multiprocessing test completed in {end_time - start_time:.2f}s")
    return results

def test_sequential_execution():
    """Test sequential execution for comparison"""
    print("Testing Sequential Execution...")
    start_time = time.time()
    
    results = []
    for i in range(4):
        results.append(cpu_intensive_task(i))
    
    end_time = time.time()
    print(f"Sequential test completed in {end_time - start_time:.2f}s")
    return results

def run_jenkins_parallelism_tests():
    """Main function to run all parallelism tests for Jenkins"""
    print("=" * 50)
    print("JENKINS PARALLELISM TEST SUITE")
    print("=" * 50)
    
    # Test 1: Sequential execution baseline
    sequential_results = test_sequential_execution()
    print()
    
    # Test 2: Threading for I/O bound tasks
    threading_results = test_threading_parallelism()
    print()
    
    # Test 3: Multiprocessing for CPU bound tasks
    multiprocessing_results = test_multiprocessing_parallelism()
    print()
    
    # Summary
    print("=" * 50)
    print("TEST SUMMARY")
    print("=" * 50)
    print(f"Sequential tasks completed: {len(sequential_results)}")
    print(f"Threading tasks completed: {len(threading_results)}")
    print(f"Multiprocessing tasks completed: {len(multiprocessing_results)}")
    
    return {
        "sequential": sequential_results,
        "threading": threading_results,
        "multiprocessing": multiprocessing_results
    }

if __name__ == "__main__":
    # Run the parallelism tests
    test_results = run_jenkins_parallelism_tests()
    
    # Exit with success code for Jenkins
    print("All parallelism tests completed successfully!")
    exit(0)