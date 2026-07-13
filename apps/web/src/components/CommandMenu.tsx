"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Settings,
  User,
  Plus,
  LayoutDashboard,
  Link2,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push('/dashboard'))}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/dashboard/snips'))}>
              <Link2 className="mr-2 h-4 w-4" />
              <span>All Snips</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              window.dispatchEvent(new Event('openCreateSnip'))
            })}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Create New Snip</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => runCommand(() => router.push('/dashboard/settings'))}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/dashboard/settings'))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
