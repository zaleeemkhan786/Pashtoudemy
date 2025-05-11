import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, PlayCircle } from "lucide-react";

export default function CourseWebsite() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">🎓 Mera Course Platform</h1>
      <p className="text-lg mb-6">
        Yahan aap apna course videos upload kar sakte hain aur students ko sikha sakte hain.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">📤 Course Upload</h2>
            <p className="mb-4">Apne course ke videos yahan upload karein:</p>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Video Upload
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">▶️ Dekhein Courses</h2>
            <p className="mb-4">Uploaded videos ko yahan se dekhein:</p>
            <Button variant="default">
              <PlayCircle className="mr-2 h-4 w-4" /> Courses Dekhein
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
