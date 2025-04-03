"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Loader2,
  Plus,
  Trash2,
  Check,
  X,
  Home,
  DollarSign,
  MapPin,
  Calendar,
  Layers,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Define the form schema with Zod
const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),
  price: z.coerce
    .number()
    .positive({ message: "Price must be a positive number" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  address: z.object({
    street: z.string().min(1, { message: "Street address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zip: z.string().min(1, { message: "ZIP code is required" }),
    country: z.string().min(1, { message: "Country is required" }),
  }),
  year_built: z.coerce
    .number()
    .positive()
    .int()
    .min(1800, { message: "Year must be valid" }),
  floor_number: z.coerce
    .number()
    .int()
    .min(0, { message: "Floor number must be valid" }),
  property_status: z
    .string()
    .min(1, { message: "Property status is required" }),
  size: z.object({
    area: z.coerce
      .number()
      .positive({ message: "Area must be a positive number" }),
    unit: z.string().min(1, { message: "Unit is required" }),
  }),
});

// Define the type based on the schema
type FormValues = z.infer<typeof formSchema>;

export function AddPropertyForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [images, setImages] = useState<
    { image_url: string; alt_text: string }[]
  >([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      currency: "USD",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "USA",
      },
      year_built: new Date().getFullYear(),
      floor_number: 0,
      property_status: "For Sale",
      size: {
        area: 0,
        unit: "sqft",
      },
    },
  });

  // Add a feature
  const addFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  // Remove a feature
  const removeFeature = (feature: string) => {
    setFeatures(features.filter((f) => f !== feature));
  };

  // Add an image
  const addImage = () => {
    if (newImageUrl.trim()) {
      const altText = newImageAlt.trim() || "Property Image";
      setImages([
        ...images,
        { image_url: newImageUrl.trim(), alt_text: altText },
      ]);
      setNewImageUrl("");
      setNewImageAlt("");
      setPreviewImage(null);
    }
  };

  // Remove an image
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Preview an image
  const handlePreviewImage = () => {
    if (newImageUrl.trim()) {
      setPreviewImage(newImageUrl.trim());
    }
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    if (images.length === 0) {
      toast.error("Please add at least one image");
      return;
    }

    setIsSubmitting(true);

    // Combine form data with features and images
    const propertyData = {
      ...data,
      features,
      images,
    };

    try {
      const response = await fetch(
        "https://homeestadb.onrender.com/api/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit property");
      }

      toast.success("Your property has been added successfully.");

      // Redirect to properties page or show success message
      router.push("/properties");
    } catch (error) {
      console.error("Error submitting property:", error);
      toast.error("Failed to add property. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Home className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Basic Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Property Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Luxury Apartment with City View"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your property in detail..."
                          className="min-h-32 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="property_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="For Sale">For Sale</SelectItem>
                          <SelectItem value="For Rent">For Rent</SelectItem>
                          <SelectItem value="Sold">Sold</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <Input type="number" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem className="w-24">
                        <FormLabel>Currency</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                            <SelectItem value="CAD">CAD</SelectItem>
                            <SelectItem value="AUD">AUD</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Location</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 123 Main St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. NY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP/Postal Code</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 10001" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. USA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Property Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="year_built"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year Built</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="floor_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floor Number</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="size.area"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Area</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="size.unit"
                    render={({ field }) => (
                      <FormItem className="w-24">
                        <FormLabel>Unit</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sqft">sq ft</SelectItem>
                            <SelectItem value="sqm">sq m</SelectItem>
                            <SelectItem value="acres">acres</SelectItem>
                            <SelectItem value="hectares">hectares</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Features</h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="py-2 px-3 text-sm"
                    >
                      {feature}
                      <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {features.length === 0 && (
                    <p className="text-gray-500 text-sm">
                      No features added yet. Add some features below.
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="e.g. Swimming Pool, Garden, etc."
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addFeature();
                      }
                    }}
                  />
                  <Button type="button" onClick={addFeature} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Image className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Images</h2>
              </div>

              <div className="space-y-6">
                {/* Image Gallery */}
                {images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden border border-gray-200"
                      >
                        <img
                          src={image.image_url || "/placeholder.svg"}
                          alt={image.alt_text}
                          className="w-full h-40 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/300x200?text=Image+Error";
                          }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="self-end bg-red-500 text-white p-1 rounded-full"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <p className="text-white text-sm truncate">
                            {image.alt_text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Image Form */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <FormLabel htmlFor="image-url">Image URL</FormLabel>
                      <div className="flex gap-2">
                        <Input
                          id="image-url"
                          placeholder="https://example.com/image.jpg"
                          value={newImageUrl}
                          onChange={(e) => setNewImageUrl(e.target.value)}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePreviewImage}
                          className="shrink-0"
                        >
                          Preview
                        </Button>
                      </div>
                    </div>

                    <div>
                      <FormLabel htmlFor="image-alt">
                        Image Description
                      </FormLabel>
                      <Input
                        id="image-alt"
                        placeholder="e.g. Living Room, Kitchen, etc."
                        value={newImageAlt}
                        onChange={(e) => setNewImageAlt(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Image Preview */}
                  {previewImage && (
                    <div className="mt-4 border rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">Preview:</p>
                      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={previewImage || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/300x200?text=Invalid+URL";
                            toast.error("Invalid Image URL", {
                              description:
                                "The URL does not point to a valid image.",
                            });
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={addImage}
                    variant="outline"
                    className="w-full"
                    disabled={!newImageUrl.trim()}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Submit Property
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
