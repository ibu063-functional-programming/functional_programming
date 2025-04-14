function hanoi(disks, from, to, extra) {
  if (disks === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
  } else {
    hanoi(disks - 1, from, extra, to);
    console.log(`Move disk ${disks} from ${from} to ${to}`);
    hanoi(disks - 1, extra, to, from);
  }
}

hanoi(3, 'A', 'C', 'B');
