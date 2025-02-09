call jmeter -Jthreads=1 -n -t test_search.jmx -l 1-threads-result.jtl
call jmeter -Jthreads=10 -n -t test_search.jmx -l 10-threads-result.jtl
call jmeter -Jthreads=100 -n -t test_search.jmx -l 100-threads-result.jtl
call jmeter -Jthreads=1000 -n -t test_search.jmx -l 1000-threads-result.jtl