export function Tag({ label }: { label: string }) {
  return (
    <li className="rounded border border-line px-1.5 py-0.5 font-mono text-xs">
      {label}
    </li>
  );
}
