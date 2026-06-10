

import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function DashBoardSidebar() {
    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];

    const NavContents = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            ))}
        </nav>
    )

    return (
        <>
       <aside
  className="
    hidden md:flex
    sticky top-0
    h-screen w-64 flex-col
    border-r border-default-200
    bg-content1/80
    backdrop-blur-md
    px-4 py-6
    shadow-sm
  "
>
  {NavContents}
</aside>
            <Drawer>
                <Button className={"lg:hidden"} variant="secondary">
                    <Bars />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {NavContents}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>

    );
}