if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

for arg in "$@"
do
	echo $arg;
done
