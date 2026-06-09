"use client";


import { Button, Card, CardContent } from "@heroui/react";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-default-50 to-default-100 px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <Card className="max-w-lg border border-default-200/50 bg-background/70 backdrop-blur-xl shadow-2xl">
                    <CardContent className="items-center gap-6 p-10 text-center">
                        {/* Animated 404 */}
                        <motion.h1
                            className="text-8xl font-black tracking-tighter text-primary"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            404
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold">
                                Oops! Page Not Found
                            </h2>

                            <p className="mt-2 text-default-500">
                                The page you're looking for doesn't exist or may have
                                been moved to another location.
                            </p>
                        </motion.div>

                        {/* Floating decorative element */}
                        <motion.div
                            className="h-20 w-20 rounded-full bg-primary/20 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <Link href={"/"}>
                            <Button

                                color="primary"
                                size="lg"
                                className="font-semibold"
                            >
                                Return Home
                            </Button></Link>

                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}