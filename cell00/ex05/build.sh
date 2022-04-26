if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

for file in "$@"
do
	mkdir "ex"$file;
done;
